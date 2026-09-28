import { isContractId, type Address, type ContractName, type NetworkConfig } from "@lumio/shared";
import { TreasuryClient } from "./treasury";
import { GovernanceClient } from "./governance";
import { DividendsClient } from "./dividends";
import { VotingClient } from "./voting";

/** The deployed contract id for each Lumio contract on a given network. */
export type ContractIds = Record<ContractName, Address>;

/** Options for constructing a {@link LumioClient}. */
export interface LumioClientOptions {
  /** The network every contract is deployed on. */
  network: NetworkConfig;
  /** The deployed contract ids, keyed by contract name. */
  contractIds: ContractIds;
}

/**
 * The top-level entrypoint: one object exposing a typed client per contract.
 *
 * ```ts
 * const lumio = new LumioClient({ network: NETWORKS.testnet, contractIds });
 * const total = await lumio.treasury.total();
 * ```
 *
 * Scaffold: the underlying clients return typed mock data for reads and throw
 * {@link NotImplementedError} for writes until Soroban RPC wiring lands.
 */
export class LumioClient {
  readonly treasury: TreasuryClient;
  readonly governance: GovernanceClient;
  readonly dividends: DividendsClient;
  readonly voting: VotingClient;

  constructor(options: LumioClientOptions) {
    const { network, contractIds } = options;

    for (const [contractName, contractId] of Object.entries(contractIds) as Array<
      [ContractName, Address]
    >) {
      if (!isContractId(contractId)) {
        throw new Error(`Invalid ${contractName} contract id "${contractId}"`);
      }
    }

    this.treasury = new TreasuryClient({
      contractId: contractIds.treasury,
      network,
      contractName: "treasury",
    });
    this.governance = new GovernanceClient({
      contractId: contractIds.governance,
      network,
      contractName: "governance",
    });
    this.dividends = new DividendsClient({
      contractId: contractIds.dividends,
      network,
      contractName: "dividends",
    });
    this.voting = new VotingClient({
      contractId: contractIds.voting,
      network,
      contractName: "voting",
    });
  }
}
