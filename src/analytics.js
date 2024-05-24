import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-10VSN5LGG8'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
//   ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label
    });
  };
  
