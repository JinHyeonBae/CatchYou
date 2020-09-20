import { useEffect } from "react";

function InitOther() {
  let arr = [];
  const len = 11;
  // init third party JS files
  useEffect(() => {
    for (let i = 0; i < len; i++) {
      arr[i] = document.createElement("script");
    }

    arr[0].src = `${process.env.PUBLIC_URL}/js/jquery`;
    arr[1].src = `${process.env.PUBLIC_URL}/js/popper.min`;
    arr[2].src = `${process.env.PUBLIC_URL}/js/bootstrap.min`;
    arr[3].src = `${process.env.PUBLIC_URL}/js/jquery.fancybox`;
    arr[4].src = `${process.env.PUBLIC_URL}/js/appear`;
    arr[5].src = `${process.env.PUBLIC_URL}/js/isotope`;
    arr[6].src = `${process.env.PUBLIC_URL}/js/owl`;
    arr[7].src = `${process.env.PUBLIC_URL}/js/wow`;
    arr[8].src = `${process.env.PUBLIC_URL}/js/jquery-ui`;
    arr[9].src = `${process.env.PUBLIC_URL}/js/script`;
    arr[10].src = `${process.env.PUBLIC_URL}/js/color-settings`;

    for (let i = 0; i < len; i++) {
      arr[i].async = false;
      document.body.appendChild(arr[i]);
    }

    // do clean ups
    return () => {
      for (let i = len - 1; i >= 0; i--) {
        document.body.removeChild(arr[i]);
      }
    };
  }, []);
}

export default InitOther;
