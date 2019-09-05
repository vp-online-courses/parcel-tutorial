export function isGoogleAnalyticsEnabled() {
    return process.env.NODE_ENV === 'production';
}