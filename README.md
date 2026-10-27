# Biozone Harmony Boost — Ecology, Wellness, and Circleunchain Interface Research

**The biozone layer of the AI Freedom Trust Federation: wellness, harmony, ecology systems, Circleunchain participation interfaces, and living-system concepts that inform—but do not replace—the Aetherion economy layer.**

| Federation metadata | Value |
| --- | --- |
| Layer | `biozone` |
| Role | biozone, wellness, harmony, and ecology systems |
| Workspace | `AIFT/biozone-harmony-boost` |
| Control plane | AIFT workspace / AIFT-OS |
| Application stack | Vite, React, TypeScript, Tailwind/shadcn-style components |
| Verification | lint, typecheck, tests, and build when present |
| Operating standards | local-first, inspectable, sovereign by default, AI behind governed provider interfaces |

Biozone Harmony Boost is a public interface and research surface for the living-system side of the Federation. It explores how ecological stewardship, wellness, participation, harmony, Biozoe concepts, and Circleunchain relationships might be expressed through a human-readable application before those concepts are absorbed into economic, governance, or infrastructure layers.

Its purpose is not to become a second wallet or a competing source of economic authority. `Aether_Coin_biozonecurrency` remains the economy layer for Aetherion, DynastyLink, AetherCoin, and biozone currency systems. This repository is where the ecological and participation language can be explored as interface, experience, and systems design.

The wider covenant is carried in the [One Eternal Scroll of ALO'ha](https://aifreedomtrustfederation.github.io/AI-Freedom-Trust/docs/pdf/one-eternal-scroll-of-aloha.pdf), with federation-wide operating discipline defined by [SOP-ALOHA-001](https://github.com/AIFreedomTrustFederation/AI-Freedom-Trust/blob/main/SOP-ALOHA-001.md).

---

## Book I — The Biozone as Living Relation

A biozone is not valuable because a dashboard labels it healthy. It is valuable because the system can help people perceive relationships among place, ecology, participation, care, resources, and the consequences of collective choices.

The repository therefore treats wellness and ecological harmony as domains that require humility. Interface language can invite a person into stewardship; it cannot manufacture evidence of environmental impact, medical benefit, biological coherence, or economic value where none has been measured.

### Illuminated passage — the living tree

![Biozoe Tree of Life](https://raw.githubusercontent.com/AIFreedomTrustFederation/AI-Freedom-Trust/main/docs/images/aetherion/biozoe-tree-of-life.png)

The Tree of Life is the central image of the biozone layer because the project is concerned with relation among living systems rather than a single isolated metric. Participation, ecology, identity, stewardship, and exchange may meet here, but none should erase the others.

---

## Book II — What Biozone Harmony Boost Owns

This repository owns the **interface and research experience** around biozone, harmony, ecology, Circleunchain, and Biozoe participation concepts. Its existing application includes public pages and interaction models for Circleunchain, Biozoe concepts, ecological stewardship, participation, privacy, terms, API shapes, and federation links.

Its integration boundaries are explicit:

- **AI-Freedom-Trust → Biozone:** doctrine supplies the ALO'ha covenant, restorative-civilization language, Aetherion illustrations, and public philosophical frame.
- **AIFT-Genesis → Biozone:** trust identity, mission, governance, and local sovereignty can provide the structure through which a person or community participates in an ecological system.
- **AIFT-Forge → Biozone:** reusable application and agent patterns may support the interface without making Forge the owner of ecological meaning.
- **AIFT-OS / Runtime ↔ Biozone:** the operating layers may discover the app, build it, verify it, and expose it as a federation service.
- **VPS ↔ Biozone:** infrastructure may host and route the public application; the app does not become infrastructure authority because it is deployed there.
- **Aetherion ↔ Biozone:** Biozone concepts can inform regenerative value, stewardship records, or future participation models. Transactions, wallet custody, token definitions, and economic security remain in the Aetherion economy repository.
- **AetherianGovernance ↔ Biozone:** community stewardship, participation rules, disputes, or collective decisions may require governance interfaces rather than being hidden inside UI logic.

**Upstream frontend-sync evidence boundary:** The Aetherion economy repository contains [Frontend Sync](https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency/blob/12b8504502e5892ac6685ed3fb2ed2f544151156/.github/workflows/frontend-sync.yml) and [Sync Frontend and Deploy to cPanel](https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency/blob/12b8504502e5892ac6685ed3fb2ed2f544151156/.github/workflows/sync-and-deploy.yml) workflows that target this repository. When their token-gated steps execute, they can copy the economy repository's `client/`, `public/`, `package.json`, and root configuration into Biozone and commit the result; that write path is not itself evidence of reviewed integration or synchronized revisions. The [October 24 Frontend Sync run](https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency/actions/runs/40102365073) and [sync-and-deploy run](https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency/actions/runs/40102365111) both reported success while checkout, copy, commit, and deployment steps were skipped. Neither run proves synchronization or deployment. Future integration claims require executed-step evidence, source and target commit identities, a reviewed file diff, Biozone verification, and authorization for changes to Biozone-owned configuration.

### Illuminated passage — Circleunchain as relational memory

![Circleunchain Memory Network](https://raw.githubusercontent.com/AIFreedomTrustFederation/AI-Freedom-Trust/main/docs/images/aetherion/circleunchain-memory-network.png)

Within this repository Circleunchain is primarily an interaction and systems concept. Any later technical implementation must state its actual storage, cryptographic, identity, and consensus mechanisms rather than allowing the name itself to imply a completed decentralized network.

---

## Book III — SOP-ALOHA-001 in the Biozone Layer

The covenant loop becomes a stewardship-interface discipline:

```text
Receive → Inspect → Name → Propose → Consent → Act → Verify → Record → Return
```

**Receive** accepts ecological data, participation input, a stewardship action, a user intention, or a public-interface request. **Inspect** determines the actual source, scope, evidence, user state, and relevant privacy or governance boundary. **Name** distinguishes measured information from user-reported information, symbolic language, research concepts, and proposed future systems. **Propose** may suggest actions, participation paths, or interpretations without presenting them as verified ecological or medical outcomes. **Consent** protects identity, personal data, public participation, external actions, and any economic integration. **Act** performs the approved interface or application operation. **Verify** checks the application build, route behavior, data handling, and any claimed external result. **Record** preserves useful system state without creating unnecessary surveillance. **Return** gives the participant a clear result and keeps unresolved uncertainty visible.

Local development follows the existing Vite application:

```bash
npm install
npm run dev
```

**Development server boundary:** `npm run dev` listens on `127.0.0.1:8080` by default, so the Vite development server is not exposed to other machines on the network. For an intentionally shared development session on a trusted network, explicitly opt in with `npm run dev -- --host 0.0.0.0`; do not use that option on untrusted networks or treat Vite's development server as an authenticated production service. The GitHub Pages build base remains unchanged.

### Reproducible checks and GitHub Pages routing

The root [`package.json`](package.json) defines explicit TypeScript checks for both the application (`tsc --noEmit -p tsconfig.app.json`) and Vite configuration (`tsc --noEmit -p tsconfig.node.json`) alongside ESLint and Vite build scripts. The root `tsconfig.json` contains only project references and an empty `files` array, so plain `tsc --noEmit` at the root does **not** check either project's source. The **focused `npm test` script** checks API-client credential-log protection and verifies that the typecheck command detects errors in both projects. This is not comprehensive application test coverage. From the repository root, use:

```bash
npm ci
npm test
npm run typecheck
npm run lint
npm run build
npm audit --audit-level=moderate
```

`npm ci` requires an npm-compatible lockfile. `npm audit` reports advisories in the installed dependency graph; it is not a substitute for source review or application security testing. The API client propagates request errors without logging full Axios error objects (which can contain authorization headers); callers must also avoid logging those objects. These are recommended commands, not a claim that they passed in the current environment.

**Federation synchronization evidence boundary:** [`.aift/capabilities.json`](.aift/capabilities.json) marks `sync` as `ready`, but its `git remote/status` descriptor is not an executable synchronization command or proof of a completed pull. The [repository status script](.aift/commands/status.sh) only reports `git status --short`; [`aift.repo.json`](aift.repo.json) separately advertises `git pull --ff-only`, which can modify the checkout if executed. Neither declaration proves that synchronization ran, reached a particular commit, or was authorized. Treat these as capability metadata and command descriptions, not verified synchronization outcomes.

The [`vite.config.ts`](vite.config.ts) configuration serves local development on port **8080** and uses `/` as the default base path. For the project GitHub Pages path, it switches the build base to `/biozone-harmony-boost/` only when `GITHUB_PAGES=true` is set. On POSIX shells:

```bash
GITHUB_PAGES=true npm run build
```

On PowerShell:

```powershell
$env:GITHUB_PAGES="true"; npm run build
```

A successful build does not itself prove that deployed deep links, APIs, or browser navigation work; inspect the deployed site separately.

**Deployment quality gate:** [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs `npm ci --no-audit`, `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` in the same build job, in that order. A lint or typecheck failure prevents the Pages artifact from being uploaded and the dependent deploy job from running. The separate [Local QA workflow](.github/workflows/qa.yml) also checks these commands. The focused `npm test` regression checks that API-client failures do not log request credentials; it does not establish broad application test coverage, runtime API verification, security auditing, or deployed-browser testing.

Verification includes:

```bash
npm test
npm run build
npm run lint
npm audit --audit-level=moderate
```

For the GitHub Pages build path:

```bash
$env:GITHUB_PAGES="true"; npm run build
```

The project should not represent a concept interface as a token sale, investment opportunity, audited custody service, production API, proven decentralized network, verified environmental impact, or medical/wellness guarantee unless the relevant implementation and evidence genuinely exist.

**Wallet-preview boundary:** the home-page Aether Wallet section contains fictional example balances and activity, not connected account records. It displays no verified fiat valuation or staking yield; Send, Receive, Buy, Stake, and sample-history controls remain disabled. The `/wallet` route is an informational concept, not a functioning wallet.

**ICON research-route boundary:** [`src/pages/Aicon.tsx`](src/pages/Aicon.tsx) renders [`AiCoinSection`](src/components/AiCoinSection.tsx) at `/aicon`. The page displays a proposed `500M ICON` supply and allocation chart as part of a research token concept; these figures do not establish token issuance, audited tokenomics, mining rewards, or operational compute contributions. Its “Download Mining Software” and “View Setup Guide” controls are enabled-looking buttons without navigation destinations or click handlers, so they do not download software or open a guide. The “Start Mining ICON” heading is not evidence of an operating mining network. Treat this route as a concept interface pending independently verified implementation and applicable governance authorization.

**ICON numerical and on-chain claim boundary:** The [`AiCoinSection`](src/components/AiCoinSection.tsx) also renders `$0.015` as an “Initial Price,” `Daily` as a payment schedule, and “validated on-chain” as a verification description. These are static research-interface labels, not evidence of a quoted market price, an issued token, an operating chain, completed proof-of-training validation, or payable rewards. The `500M ICON` figure and mining requirements are illustrative as well; financial, verification, or payout claims require independently verified implementation and applicable authorization.

**API prototype boundary:** [`src/pages/Api.tsx`](src/pages/Api.tsx) shows *proposed* `https://api.aifreedomtrust.com/v1` endpoints, example bearer headers, and an SDK design sketch; this repository does not deploy those endpoints, issue API keys, or publish an installable SDK. [`src/services/api/index.ts`](src/services/api/index.ts) initializes a `FractalCoinApi` with the placeholder `https://api.fractalcoin.example` and a separate GitHub REST client; [`src/services/api/fractalCoinApi.ts`](src/services/api/fractalCoinApi.ts) implements HTTP request wrappers, not a transaction or custody backend. The [`API-client regression tests`](tests/api-client-redaction.test.mjs) verify credential-log handling with synthetic inputs, not live API availability or end-to-end authentication. Do not insert real credentials into sample requests or assume a separate service is operational without independent verification.

**Browser network and dormant financial-hook boundary:** The home page renders a [GitHub activity panel](src/components/GitHubSection.tsx) that uses the [GitHub hooks](src/hooks/useGitHub.ts) and [GitHub API client](src/services/api/githubApi.ts) to fetch public repository details, contributors, and pull requests directly from `https://api.github.com` in the visitor's browser. This is read-only public GitHub data, not Federation service-health evidence; availability depends on connectivity, GitHub API responses, and rate limits. Separately, the [FractalCoin hooks](src/hooks/useFractalCoin.ts) configure `https://api.fractalcoin.io` and expose wallet, transaction, and send-transaction request methods through the [client wrapper](src/services/api/fractalCoinApi.ts). Repository code search found no routed page or component importing those hooks, so their existence does **not** establish an active wallet, authorized transaction flow, or verified third-party service. Connecting them to the UI would require endpoint ownership, privacy, credential-handling, and transaction-authorization review before use.

---

## Book IV — From Ecological Meaning to Federated Action

The biozone layer becomes useful when it can help a person or community see a living system clearly enough to act with care. That may eventually include stewardship missions, ecological records, community participation, regenerative value relationships, and interfaces into governance or economic systems. Those connections should remain modular so that an ecological insight does not automatically become a financial transaction or governance decision.

This is where the repository contributes something distinct to the Federation: it keeps living systems visible inside a technical architecture that might otherwise become preoccupied with repositories, models, transactions, and servers.

### The Return of the Word

In Biozone Harmony Boost, the Word returns as participation that still remembers the living world to which it refers. Observation becomes relationship, relationship becomes a proposed act of stewardship, stewardship becomes a verifiable change where verification is possible, and the result returns without pretending that life can be reduced to the interface that helped us see it.
