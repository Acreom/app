[![Netlify Status](https://api.netlify.com/api/v1/badges/a6dcb2ec-e798-4903-8f5a-3a2c2477dab1/deploy-status)](https://app.netlify.com/sites/acreom-app/deploys)
![Test](https://github.com/acreom/app/actions/workflows/tests.yaml/badge.svg)
![Release](https://github.com/acreom/app/actions/workflows/release.yaml/badge.svg)

<p align="center">
  <a href="https://acreom.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="/assets/acreom-logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="/assets/acreom-logo-light.svg">
      <img src="/assets/acreom-logo-dark.svg" width="200" height="100" alt="acreom logo"/>
    </picture>
  </a>
</p>

<p align="center">
    <em> acreom is a personal issue tracker with context. Capture notes, link PRs, and track progress in a lightweight interface. </em>
</p>

With features like intelligent code completion, integrations with dev tools and extensibility, IDEs have fundamentally simplified the way we code, while using the knowledge bases and task managers of today often feels like a burden. Something always irks us about the user experience. It turns out, most of the collaborative interfaces have never been designed for developers but for PMs with developers in mind.

Our mission is to build the workflow tool you will love using alongside your code editor.

This is the spec we have in mind today for such a tool:

- A powerful markdown editor at the core with tasks built-in. We believe that every knowledge base should be actionable.
- Capture-first organise-later interface built for speed.
- Deeply integrated with other devtools.
- Optimised for keyboard.
- Local-first with sync.
- Open-source and community driven.

## Features

- Pages & Tasks
- Projects & Views
- Vaults
- E2EE Sync Across Multiple Devices
- Page Version History
- Page & Folder Sharing (PRO)
- Jira Sync (PRO)
- GitHub Sync (PRO)
- Linear Sync (PRO)
- Apple Calendar Sync
- Google Calendar Sync (PRO)
- .ics Calendar Sync
- acreom Assistant (with ChatGPT Custom Token)

## Development Quick Start

### Prerequisites

List any prerequisites for your project, such as:
- Node.js version >=18.16
- yarn
- git
- cross-env (installed globally)

## Installation

1. Fork the repository and clone it to your local machine

   After forking, run the following command to clone the repository to your local machine:

    ```bash
    git clone git@github.com/your-username/acreom.git
    ```

2. Install the dependencies

   Navigate to the project directories (quick capture, frontend, and electron) and install the required dependencies:

    ```bash
    cd acreom
    cd frontend
    yarn install
    cd ..
    cd electron
    yarn install
    cd ..
    cd quick-capture
    yarn install 
    ```

### Steps

Start Quick Capture, frontend, then run electron

The order in which you run the commands is important. Electron binds to the port that is used by the frontend, so you need to start the frontend first. Quick Capture doesn't need to be started at all, you can skip the step entirely.

 ```bash
 cd frontend
 cross-env ARC_OS=[mac|windows|linux] ACR_PLATFORM=[mobile|desktop|web] BASE_URL=https://api.acreom.com FE_BASE_URL=https://app.acreom.com yarn dev
 ```
```bash
cd electron
yarn dev
```
```bash
 cd quick-capture
 cross-env ARC_OS=[mac|windows|linux] ACR_PLATFORM=[mobile|desktop|web] BASE_URL=https://api.acreom.com FE_BASE_URL=https://app.acreom.com yarn dev
 ```

## Contributing

We welcome any contributions to acreom. You can learn how to contribute by reading our [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE](LICENCE.md) file for details.
