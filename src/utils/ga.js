import ua from 'universal-analytics'; // npm package for GA

let visitor = {};
const userId = 'userID--getFromStore';
export const initGoogleAnalytics = () => {
  visitor = ua(process.env.GOOGLE_ANALYTICS_ID);
};
export const setAnalyticsPageView = pageName => visitor.pageview({ dp: `/${pageName}`, dt: pageName, dh: window.location.href }).send();
export const setAnalyticsEvent = (event) => {
  if (typeof (event.func) !== 'function') {
    // console.warn('Must supply function that needs to be executed');
  }
  event.func();
  visitor.event(event.category, event.action, event.label, { dimension1: userId }).send();
};
