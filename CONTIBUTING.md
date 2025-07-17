# Contributing to Embeddable Marketplace

Thank you for your interest in contributing! Please follow these guidelines when creating a Pull Request.

## Routes Structure

| Routes       | Description                                                                                                                                                                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [collection] | Each collection in config has a dedicated type (auction, marketplace, exchange, etc.). Based on id of collection provided in config this url is dynamically generated                                                                                                                    |
| cw721        | Most examples use cw721 as NFT tokens. This route is specifically for cw721 rendering. Internally cw721 may render helper components like AuctionInfo, MarketplaceInfo. If there is another ADO used, create a dedicated route for it instead of adding switch statements in cw721 route |
| cw20         | Route for CW20 token interactions and displays                                                                                                                                                                                                                                           |
| [tokenId]    | Each token in cw721 has its dedicated page generated dynamically from contract data                                                                                                                                                                                                      |

## Config Structure

| Field       | Description                                                                               |
| ----------- | ----------------------------------------------------------------------------------------- |
| Name        | Name of the Embeddable                                                                    |
| Chain Id    | Chain Id for the embeddable to connect on. Any incompatible ADO will probably throw error |
| Collections | List of various collections. Collection can be auction, marketplace, exchange, etc.       |

For more info on config, take a look at `src/config.ts` file

## How to create your own embeddable?

To run an embeddable using this approach, you will need to first create a config file. Go to our webapp to create a config file.

Once you have a valid config file, you can clone this project and replace the configuration in `src/config.ts`.

_Do not forget to uncomment code from AppProvider.tsx in private build_

If you wish to preview your embeddable instead of cloning, you can use the link provided while creating the config file from webapp.

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for consistent formatting
- Write meaningful commit messages following conventional commits
- Add proper JSDoc comments for functions and components

### Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/your-feature-name`)
3. **Implement** your changes with proper testing
4. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
5. **Push** to your branch (`git push origin feature/your-feature-name`)
6. **Create** a Pull Request with a clear description

### Testing

- Ensure your code builds without errors (`npm run build`)
- Run linting checks (`npm run lint`)
- Test your changes across different screen sizes
- Verify both light and dark mode functionality

### Component Guidelines

- Use Chakra UI components when possible
- Follow the existing theming system with `useColorModeValue`
- Ensure accessibility with proper ARIA labels
- Keep components small and focused on single responsibility

### Adding New Collection Types

1. Define the new type in `src/lib/app/types.ts`
2. Add configuration in `src/config.ts`
3. Create components in appropriate module folder
4. Add routing if needed in app directory
5. Update documentation
