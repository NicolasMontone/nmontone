declare global {
  interface Window {
    gtag: Gtag.Gtag
  }
}

// log the pageview with their URL
export function pageview(url: string): void {
  window.gtag('config', 'G-GPYT1RP7ZN', {
    page_path: url,
  })
}

// log specific events happening.
export function event({ action }: { action: string }): void {
  window.gtag('event', action)
}
