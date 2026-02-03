import { Fragment } from 'react'
import { useTheme } from '../context/ThemeContext'

// Use BASE_URL for GitHub Pages compatibility
const BASE = import.meta.env.BASE_URL

// Image paths from public folder (URL encoded for spaces)
const LEFT_IMAGE_LIGHT = `${BASE}Onboarding%20Image%20Left%20(Light%20Mode).png`
const LEFT_IMAGE_DARK = `${BASE}Onboarding%20Image%20Left%20(Dark%20Mode).png`
const RIGHT_IMAGE_LIGHT = `${BASE}Onboarding%20Image%20Right%20(Light%20Mode).png`
const RIGHT_IMAGE_DARK = `${BASE}Onboarding%20Image%20Right%20(Dark%20Mode).png`
const LOGO_LIGHT = `${BASE}SquareX%20Logo%20Light.svg`
const LOGO_DARK = `${BASE}SquareX%20Logo%20Dark.svg`

// Shared image classes: size, transform, rounded, transition (same for left & right)
const IMAGE_BASE_CLASSES =
  'absolute left-0 w-auto h-[250px] md:h-[250px] lg:h-[250px] xl:h-[420px] 2xl:h-1/2 3xl:h-[55%] 4xl:h-[60%] 5xl:h-[65%] skew-x-[18.521deg] md:rounded-[12px] lg:rounded-[20px] xl:rounded-[24px] 2xl:rounded-[36px] 3xl:rounded-[40px] transition-all duration-500 ease-in-out'

const LEFT_IMAGE_CLASSES = `${IMAGE_BASE_CLASSES} top-[42%] -translate-x-[59%] md:-translate-x-[59%] lg:-translate-x-[59%] xl:-translate-x-[59%] 2xl:-translate-x-[59%] 3xl:-translate-x-[59%] 4xl:-translate-x-[59%] 5xl:-translate-x-[59%]`
const RIGHT_IMAGE_CLASSES = `${IMAGE_BASE_CLASSES} md:top-[25%] lg:top-[25%] xl:top-[12.2%] translate-x-[38%] md:translate-x-[38%] lg:translate-x-[38%] xl:translate-x-[38%] 2xl:translate-x-[38%] 3xl:translate-x-[38%] 4xl:translate-x-[38%] 5xl:translate-x-[38%]`

const PANEL_IMAGES = [
  {
    light: LEFT_IMAGE_LIGHT,
    dark: LEFT_IMAGE_DARK,
    altPrefix: 'Left panel',
    classes: LEFT_IMAGE_CLASSES,
    shadowVar: '--box-shadow-left',
  },
  {
    light: RIGHT_IMAGE_LIGHT,
    dark: RIGHT_IMAGE_DARK,
    altPrefix: 'Right panel',
    classes: RIGHT_IMAGE_CLASSES,
    shadowVar: '--box-shadow-right',
  },
]

const BrandingPanel = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div
      className="hidden md:flex md:w-1/2 justify-between items-center relative z-10 overflow-hidden transition-all duration-500 ease-in-out"
    >
      {/* Logo - positioned at top left - Click to toggle theme */}
      <div
        className="absolute top-[32px] left-[48px] flex items-center gap-2 z-10 cursor-pointer"
        onClick={toggleTheme}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div className="relative h-[30px] w-[120px]">
          <img
            src={LOGO_LIGHT}
            alt="SquareX Logo"
            className="absolute h-[30px] transition-opacity duration-500 ease-in-out"
            style={{ opacity: isDark ? 0 : 1 }}
          />
          <img
            src={LOGO_DARK}
            alt="SquareX Logo"
            className="absolute h-[30px] transition-opacity duration-500 ease-in-out"
            style={{ opacity: isDark ? 1 : 0 }}
          />
        </div>
      </div>

      {/* Panel images - crossfade between light and dark per slot */}
      {PANEL_IMAGES.map(({ light, dark, altPrefix, classes, shadowVar }) => (
        <Fragment key={altPrefix}>
          <img
            src={light}
            alt={`${altPrefix} light`}
            className={classes}
            style={{
              boxShadow: `var(${shadowVar})`,
              opacity: isDark ? 0 : 1,
            }}
          />
          <img
            src={dark}
            alt={`${altPrefix} dark`}
            className={classes}
            style={{
              boxShadow: `var(${shadowVar})`,
              opacity: isDark ? 1 : 0,
            }}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default BrandingPanel
