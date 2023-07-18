export const onClickAbout = (e: any, anchor: string): void => {
  e.preventDefault();
  let scrolling: any;
  scrolling = document.getElementById(anchor);
  scrolling.scrollIntoView();
};
