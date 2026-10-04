# @lumio/sdk

Typed clients for the four [Lumio](https://github.com/lumio-network) Soroban contracts —
treasury, governance, dividends, and voting.

> ⚠️ **Scaffold phase.** Read methods return typed mock data so apps can render real UI, and
> state-changing methods throw `NotImplementedError`. The Soroban RPC transport and transaction
> assembly land in a later phase.

## Install

```bash
pnpm add @lumio/sdk
```

`@lumio/shared` is a dependency and installs automatically.

## Usage

### Construct a client

```ts
import { LumioClient, type ContractIds } from "@lumio/sdk";
import { NETWORKS } from "@lumio/shared";

const contractIds: ContractIds = {
  treasury: "C" + "A".repeat(55),
  governance: "C" + "B".repeat(55),
  dividends: "C" + "C".repeat(55),
  voting: "C" + "D".repeat(55),
};

const lumio = new LumioClient({ network: NETWORKS.testnet, contractIds });
```

Replace each contract id with the real deployed address for your target network.
`NETWORKS.testnet`, `NETWORKS.futurenet`, and `NETWORKS.mainnet` are exported from
`@lumio/shared`.

### Read data (scaffold — returns mock values)

```ts
const total = await lumio.treasury.total(); // 0n
const balance = await lumio.treasury.balanceOf(memberAddress); // 0n
const count = await lumio.governance.proposalCount(); // 0
const proposal = await lumio.governance.getProposal(1); // null
const pool = await lumio.dividends.pool(); // 0n
const shares = await lumio.dividends.listShares(); // []
const tally = await lumio.voting.tally(1); // { yes: 0, no: 0, abstain: 0 }
```

### Write methods (scaffold — throws `NotImplementedError`)

```ts
import { NotImplementedError } from "@lumio/sdk";

try {
  await lumio.treasury.deposit(memberAddress, 10_000_000n);
} catch (e) {
  if (e instanceof NotImplementedError) {
    // Expected in scaffold phase — Soroban RPC wiring is not yet implemented.
  }
}
```

### Individual contract clients

Each client is also exported for direct use:

```ts
import {
  TreasuryClient,
  GovernanceClient,
  DividendsClient,
  VotingClient,
} from "@lumio/sdk";

const treasury = new TreasuryClient({ contractId: contractIds.treasury, network: NETWORKS.testnet });
```

### Base client

Every client above extends the exported `ContractClient` base class. It holds the contract's
`contractId` and `network`, and validates the contract id on construction, throwing
`Invalid <label> contract id "<id>"` when the value is not a `C…` address. Subclasses add one method
per contract entrypoint:

```ts
import { ContractClient } from "@lumio/sdk";

class MyClient extends ContractClient {
  // one method per contract entrypoint
}
```

Clients are constructed with a single `ClientOptions` object:

- `contractId` — the deployed contract id (`"C…"`), validated on construction.
- `network` — the network the contract lives on.
- `contractName` — optional label used in validation errors. Defaults to the subclass name with the
  `Client` suffix dropped and lowercased (`TreasuryClient` → `treasury`).

### Types

`@lumio/sdk` re-exports every type from `@lumio/shared` — `Member`, `Contribution`, `Proposal`,
`Vote`, `Dividend`, `Address`, `Amount`, `ContractName`, `NetworkConfig`, and more — so app code
only needs a single import source.

## License

[Apache-2.0](./LICENSE). Part of the [lumio-sdk](https://github.com/lumio-network/lumio-sdk) monorepo.
