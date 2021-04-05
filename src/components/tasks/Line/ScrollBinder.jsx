import useEvent from "@react-hook/event";
import useMouse from "@react-hook/mouse-position";

export default function ScrollBinder() {
  const mouse = useMouse(document.querySelector("#__next"), {
    enterDelay: 100,
    leaveDelay: 100,
  });

  useEvent(document.querySelector(".Tasks-Scroller"), "scroll", (e) => {
    if (mouse.clientX <= 335) {
      const lineScroller = document.querySelector(".LineTasks-Scroller");
      lineScroller.scrollTo(
        0,
        (e.target.scrollTop / e.target.scrollTopMax) * lineScroller.scrollTopMax
      );
    }
  });

  useEvent(document.querySelector(".LineTasks-Scroller"), "scroll", (e) => {
    if (mouse.clientX > 335) {
      const tasksScroller = document.querySelector(".Tasks-Scroller");
      tasksScroller.scrollTo(
        0,
        (e.target.scrollTop / e.target.scrollTopMax) *
          tasksScroller.scrollTopMax
      );
    }
  });

  return null;
}
