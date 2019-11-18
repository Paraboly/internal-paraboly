/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from "lit-element";
import { PageViewElement } from "./page-view-element.js";

// These are the shared styles needed by this element.
import { SharedStyles } from "./shared-styles.js";
import { WiredCard, WiredLink, WiredImage } from "wired-elements";
import { WiredFab } from "wired-fab";
import { WiredCalendar } from "wired-calendar";
import { Icon } from "@material/mwc-icon";

class MyView1 extends PageViewElement {
  static get styles() {
    return [SharedStyles];
  }

  render() {
    return html`
      <section>
        <wired-card elevation="4">
          <div class="title">
            <h3>Applications</h3>
          </div>
          <div class="content">
            <div class="flex-container">
              <wired-fab> <mwc-icon>code</mwc-icon> </wired-fab>
              <wired-link
                href="http://metis.internal.paraboly.com/"
                target="_blank"
              >
                Metis Test
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>code</mwc-icon> </wired-fab>
              <wired-link
                href="http://kgm.test.internal.paraboly.com/sbs/"
                target="_blank"
              >
                SBS Test
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>code</mwc-icon> </wired-fab>
              <wired-link href="http://metistraffic.com" target="_blank">
                Metistraffic
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>code</mwc-icon> </wired-fab>
              <wired-link href="https://tkm.konya.bel.tr" target="_blank">
                Metis Konya
              </wired-link>
            </div>
          </div>
        </wired-card>
      </section>
      <section>
        <wired-card elevation="4">
          <div class="title">
            <h3>Project Management</h3>
          </div>
          <div class="content">
            <div class="flex-container">
              <wired-fab> <mwc-icon>ballot</mwc-icon> </wired-fab>
              <wired-link
                href="https://www.meistertask.com/app"
                target="_blank"
              >
                MeisterTask
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>event_note</mwc-icon> </wired-fab>
              <wired-link
                href="http://openproject.internal.paraboly.com/"
                target="_blank"
              >
                Open Project
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>event_note</mwc-icon> </wired-fab>
              <wired-link
                href="http://youtrack.internal.paraboly.com/dashboard"
                target="_blank"
              >
                YouTrack
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>chat</mwc-icon> </wired-fab>
              <wired-link
                href="https://parabolyazilim.slack.com/apps"
                target="_blank"
              >
                Slack
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>collections_bookmark</mwc-icon> </wired-fab>
              <wired-link
                href="https://drive.google.com/drive/u/1/folders/0ByaTXw2OI-4rUVB0bFg4Tk5CcU0"
                target="_blank"
              >
                Documents
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>collections_bookmark</mwc-icon> </wired-fab>
              <wired-link
                href="https://parabol-internal-blog.atlassian.net/wiki/"
                target="_blank"
              >
                Confluence
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>build</mwc-icon> </wired-fab>
              <wired-link
                href="http://mock.internal.paraboly.com/"
                target="_blank"
              >
                DuckRails
              </wired-link>
            </div>
            <div class="flex-container">
              <wired-fab> <mwc-icon>build</mwc-icon> </wired-fab>
              <wired-link
                href="http://wikijs.internal.paraboly.com/"
                target="_blank"
              >
                WikiJS
              </wired-link>
            </div>
            
          </div>
        </wired-card>
      </section>
      <section>
        <wired-card elevation="3" style="max-width: 1200px;">
          <div class="title">
            <h3>Team</h3>
          </div>
          <div class="content">
            <div class="flex-container">
              <wired-image
                elevation="4"
                src="../../images/team/emre_2.png"
              ></wired-image>
              <h5>Emre: The Crazy</h5>
            </div>
            <div class="flex-container">
              <wired-image
                elevation="4"
                src="../../images/team/mehmet.png"
              ></wired-image>
              <h5>Mehmet: The Kamikazee</h5>
            </div>
            <div class="flex-container">
              <wired-image
                elevation="4"
                src="../../images/team/metin.png"
              ></wired-image>
              <h5>Metin: The Exponential</h5>
            </div>
            <div class="flex-container">
              <wired-image
                elevation="4"
                src="../../images/team/egemen_2.png"
              ></wired-image>
              <h5>Egemen: The Funny</h5>
            </div>
            <div class="flex-container">
              <wired-image
                elevation="4"
                src="../../images/team/ahmet.png"
              ></wired-image>
              <h5>Ahmet: The Last Bender</h5>
            </div>
            <div class="flex-container">
              <wired-image
                elevation="4"
                src="../../images/team/haldun.png"
              ></wired-image>
              <h5>Haldun: The Chill</h5>
            </div>
            <div class="flex-container">
              <wired-image
                elevation="4"
                src="../../images/team/nurgazi.png"
              ></wired-image>
              <h5>Nurgazy: The Mafia</h5>
            </div>
            <div class="flex-container">
              <wired-image
                elevation="4"
                src="../../images/team/ege.png"
              ></wired-image>
              <h5>Ege: The King Slayer</h5>
            </div>
            <div class="flex-container">
              <wired-image
                elevation="4"
                src="../../images/team/kuray.png"
              ></wired-image>
              <h5>Kuray: The Beard</h5>
            </div>
          </div>
        </wired-card>
      </section>
      <section>
        <wired-card elevation="3">
          <div class="title">
            <h3>Milestones</h3>
          </div>
          <div class="content">
            <div class="flex-container">
              <wired-calendar selected="Jul 4, 2019"> </wired-calendar>
            </div>
          </div>
        </wired-card>
      </section>
    `;
  }
}

window.customElements.define("my-view1", MyView1);
