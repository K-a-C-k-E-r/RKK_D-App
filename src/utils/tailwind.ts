/**
 * Tailwind CSS Utility Classes for Andromeda Marketplace
 * 
 * This file contains utility functions and class combinations that work
 * alongside Chakra UI without breaking the existing design.
 * 
 * Usage Examples:
 * - Use tw- prefix to avoid conflicts with Chakra UI
 * - Combine with Chakra UI props using className
 */

// Common utility class combinations
export const tailwindUtils = {
  // Layout utilities
  container: "tw-container tw-mx-auto tw-px-4",
  flexCenter: "tw-flex tw-items-center tw-justify-center",
  flexBetween: "tw-flex tw-items-center tw-justify-between",
  gridCols: {
    1: "tw-grid tw-grid-cols-1",
    2: "tw-grid tw-grid-cols-1 md:tw-grid-cols-2",
    3: "tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3",
    4: "tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4",
  },

  // Spacing utilities
  spacing: {
    section: "tw-py-16 md:tw-py-24",
    component: "tw-py-8 md:tw-py-12",
    element: "tw-py-4 md:tw-py-6",
  },

  // Typography utilities
  text: {
    gradient: "tw-bg-gradient-to-r tw-from-primary-400 tw-to-primary-600 tw-bg-clip-text tw-text-transparent",
    balance: "tw-text-balance", // Better text wrapping
    pretty: "tw-text-pretty", // Better line breaks
  },

  // Animation utilities
  animations: {
    fadeIn: "tw-animate-fade-in",
    slideUp: "tw-animate-slide-up",
    pulse: "tw-animate-pulse-slow",
    hover: "tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-transform hover:tw--translate-y-1",
    scale: "tw-transition-transform tw-duration-200 hover:tw-scale-105 active:tw-scale-95",
  },

  // Effect utilities
  effects: {
    glassmorphism: "tw-backdrop-blur-lg tw-bg-white/10 tw-border tw-border-white/20",
    shadow: {
      soft: "tw-shadow-xl tw-shadow-primary-500/10",
      glow: "tw-shadow-2xl tw-shadow-primary-500/25",
      colored: "tw-shadow-lg tw-shadow-primary-600/20",
    },
    gradient: {
      primary: "tw-bg-gradient-to-r tw-from-primary-500 tw-to-primary-700",
      dark: "tw-bg-gradient-to-b tw-from-gray-800 tw-to-gray-900",
      light: "tw-bg-gradient-to-b tw-from-white tw-to-gray-50",
    },
  },

  // Responsive utilities
  responsive: {
    hide: {
      mobile: "tw-hidden md:tw-block",
      desktop: "tw-block md:tw-hidden",
    },
    show: {
      mobile: "tw-block md:tw-hidden",
      desktop: "tw-hidden md:tw-block",
    },
  },
};

// Utility function to combine Tailwind classes safely
export const cn = (...classes: (string | undefined | null | boolean)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Example usage patterns for components
export const exampleUsage = {
  // Card component with Tailwind + Chakra UI
  cardExample: `
    <Card className={cn(
      tailwindUtils.animations.hover,
      tailwindUtils.effects.shadow.soft,
      "tw-border-0"
    )}>
      <CardBody className="tw-space-y-4">
        <Text className={tailwindUtils.text.gradient}>
          Gradient Text
        </Text>
      </CardBody>
    </Card>
  `,

  // Layout with responsive grid
  gridExample: `
    <Container className={tailwindUtils.container}>
      <div className={cn(
        tailwindUtils.gridCols[3],
        "tw-gap-6",
        tailwindUtils.spacing.section
      )}>
        {/* Grid items */}
      </div>
    </Container>
  `,

  // Animated button
  buttonExample: `
    <Button 
      className={cn(
        tailwindUtils.animations.scale,
        tailwindUtils.effects.shadow.glow
      )}
    >
      Animated Button
    </Button>
  `,
};

export default tailwindUtils;
