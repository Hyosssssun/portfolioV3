import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
      <div
          id={idName}
          className={
              idName === "contact"
                  ? `app__container-no-min-height ${classNames}`
                  : `app__container ${classNames}`
          }
      >
          {idName !== "contact" && <SocialMedia />}

          <div className={
              idName === "contact"
                  ? 'app__wrapper-no-padding app_flex'
                  :  idName === "about" ? 'app__wrapper-no-padding app_flex' : 'app__wrapper app_flex'
          }>
              <Component />

              <div className="copyright">
                  <p className="p-text">@2022 Hyosun</p>
                  <p className="p-text">All rights reserved</p>
              </div>
          </div>
          <NavigationDots active={idName} />
      </div>
  );
}

export default AppWrap