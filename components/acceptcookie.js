import React, { useEffect, useState } from "react";
import { cookievalue } from "cookievalue";
function popup({ button, url, left }) {
  const [isaccepted, setisaccepted] = useState(true);
  const acceptCookie = (e) => {
    if (typeof window !== "undefined") {
      var cookie = (document.cookie = "acceptcookie=Yes i accept cookie");
      if (cookie) {
        setisaccepted(false);
      }
    }
  };

  const loadaccept = () => {
    if (typeof window !== "undefined") {
      var cookie = document.cookie;
      if (cookievalue("acceptcookie", cookie)) {
        setisaccepted(false);
      } else {
        setisaccepted(true);
      }
    }
  };
  useEffect(() => {
    loadaccept(), [];
  });

  return (
    <>
      {isaccepted ? (
        <div id="popup">
          <p>
            We use <a href={url}> Cookies</a> for a number of reasons such as
            keeping our Sites reliable and secure, personalizing content and ads
            providing social media features and to analyse how our sites are
            used.
          </p>
          <button type="button" onClick={(e) => acceptCookie(e)}>
            {button}
          </button>
        </div>
      ) : null}

      <style jsx>{`
        @media (max-width: 600px) {
          div#popup {
            left: 2% !important;
            right: 2%% !important;
            width: 96% !important;
          }
        }
        div#popup {
          position: fixed;
          z-index: 10000;
          bottom: 2%;
          ${left ? "left: 2%;" : "right : 2%;"}
          padding: 2em;
          background: white;
          width: 400px;
          border-radius: 5px;
          box-shadow: 0 0 20px 6px #1a237e26;
        }

        div#popup button {
          float: right;
          padding: 1em;
          border: none;
          background: #1a237e;
          color: white;
          border-radius: 5px;
          margin-top: 2em;
        }

        div#popup p {
          line-height: 1.4;
        }
      `}</style>
    </>
  );
}

export default popup;
