/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css } from "lit-element";

export const SharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
    display: flex;
    justify-content: center;
  }

  section > wired-card {
    max-width: 700px;
    box-sizing: border-box;
    margin: auto;
    padding: 20px;
    display: block;
  }

  wired-image {
    height: auto;
    width: auto;
    min-width: 180px;
  }

  section > wired-button {
    margin-left: 8px;
    background: yellow;
  }

  section > wired-input {
    font-family: inherit;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }
  wired-card h5 {
    margin: 0;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: -20px;
  }
  wired-card > .title > h3 {
    border-bottom: 1px solid;
    margin: 0;
    margin-bottom: 10px;
  }

  wired-card > .content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;
