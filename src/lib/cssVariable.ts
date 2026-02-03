export default function cssVariable(name: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
