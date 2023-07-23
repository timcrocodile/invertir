export const onClickAbout = (e: any, anchor: string): void => {
  e.preventDefault();
  let scrolling: any;
  scrolling = document.getElementById(anchor);
  scrolling.scrollIntoView();
};

export const linkTo = (url: string, isNewTab: string): any => {
  if (typeof window !== "undefined") {
    window.open(url, isNewTab);
  }
};
