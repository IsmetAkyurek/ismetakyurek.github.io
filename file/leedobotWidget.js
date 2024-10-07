/** Create Font */
const fontElement = document.createElement("link");
fontElement.rel = "stylesheet";
fontElement.href =
  "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";
document.body.appendChild(fontElement);

/** Create CSS */
const cssElement = document.createElement("style");
cssElement.innerHTML = `
  .navbar {
    display: none !important;
  }
  .body {
    height: unset !important;
    padding-top: 0 !important;
    background: unset !important;
  }
  .body > .container {
    margin: 0 !important;
    padding: 0 !important;
    max-width: unset !important;
  }
  .body > .container > .row {
    margin: 0 !important;
    display: block !important;
  }
  .body > .container > .row > .card {
    padding: 0 !important;
    border: none !important;
    display: block !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: unset !important;
  }
  .body > .container > .row > .card > div:not(:nth-child(3)) {
    display: none !important;
  }
  .body > .container > .row > .card > div:nth-child(3) {
    display: block !important;
  }
  .body > .container > .row > .card .body1 {
    margin: 0 !important;
    padding: 0 !important;
    width: unset !important;
    font-size: unset !important;
  }
  footer {
    display: none !important;
  }

  body {
    display: block;
    overflow: unset;
    height: unset !important;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  body * {
    box-sizing: border-box;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  #ChatbotAssistantPage {
    padding-bottom: 76px;
    padding-top: 88px;
    font-family: Inter, sans-serif;
  }

  #ChatbotAssistant {
    width: 640px;
    margin: auto;
    max-width: 100%;
  }

  #chatbot .ChatrobotWidgetContainer {
    z-index: 2;
  }

  #chatbot .response p,
  #chatbot .message-text p,
  #chatbot .reply-button,
  #chatbot .ChatrobotNewMessage {
    font-family: Inter, sans-serif;
  }

  #chatbot .message-text p {
    font-weight: 600;
    line-height: 1.42;
    font-size: 15px;
  }

  #chatbot .ChatrobotSender {
    left: 0;
    right: 0;
    bottom: 0;
    border: none;
    display: flex;
    height: unset;
    position: fixed;
    align-items: center;
    justify-content: center;
    padding: 0 0 20px 0;
  }

  #chatbot .ChatrobotSender input {
    font-weight: 600;
    border-radius: 16px;
    width: 640px;
    height: unset;
    font-size: 15px !important;
    background-color: unset;
    background-color: #eaebec;
    box-sizing: border-box;
    max-width: calc(100% - 24px);
    padding: 16px 48px 16px 12px;
  }

  #chatbot .ChatrobotSender input::placeholder {
    font-weight: 600;
    color: #00021866;
    font-family: Inter, sans-serif;
  }

  #chatbot .ChatrobotSend {
    position: absolute;
    padding-right: 0 !important;
    width: unset !important;
    right: calc(((100vw - 640px) / 2) + 12px);
  }

  #chatbot .ChatrobotSend img {
    width: 24px;
    height: 24px;
  }

  #chatbot .ChatrobotMessageBody {
    margin: 8px 0;
  }

  #chatbot .response {
    font-weight: 600;
    left: 48px;
    max-width: 400px;
    background-color: #626b771f;
    border-radius: 16px 16px 16px 0;
    max-width: calc(100% - 72px);
  }

  #chatbot .response p {
    color: #0b0e26;
    font-size: 15px;
  }

  #chatbot .response-indicator {
    margin-bottom: 0;
    font-weight: 600;
    left: 48px;
    max-width: 400px;
    padding: 17px 12px;
    background-color: #626b771f;
    border-radius: 16px 16px 16px 0;
    max-width: calc(100% - 72px);
  }

  #chatbot .ChatrobotMessage.message_sent_by_client .ChatrobotMessageBody {
    padding-right: 48px;
  }

  #chatbot .client {
    max-width: 400px;
    max-width: calc(100% - 72px);
    border-radius: 16px 16px 0 16px;
    background-color: #14d599 !important;
  }

  #chatbot .client::after {
    right: 0;
    bottom: 1px;
    font-weight: 800;
    width: 40px;
    height: 40px;
    display: flex;
    font-size: 15px;
    border-radius: 40px;
    content: "You";
    align-items: center;
    justify-content: center;
    position: absolute;
    color: #0b0e26;
    border: 2px solid #0b0e26;
  }

  #chatbot .avatar {
    margin-right: 0;
    width: 40px;
    height: 40px;
  }

  #chatbot .indicator {
    background-color: #0b0e26 !important;
  }

  #chatbot .response-quick-reply {
    text-align: left;
  }

  #chatbot .quick-replies-container {
    padding-left: 48px;
  }

  #chatbot .reply-button-container {
    border: none;
    margin: 6px 8px 6px 0;
  }

  #chatbot .reply-button-container .reply-button {
    font-weight: 800;
    font-size: 16px;
    border-radius: 16px;
    padding: 12px 24px;
    border: 1px solid transparent;
  }

  #chatbot .reply-button-container .reply-button img {
    display: none;
  }

  #chatbot .quick-replies-container .reply-button-container .reply-button {
    color: #0b0e26;
    border: 1px solid #626b77;
  }

  #chatbot .quick-replies-container .reply-button-container .reply-button:hover {
    color: #0b0e26 !important;
    background-color: transparent !important;
  }

  #chatbot .quick-replies-container .reply-button-container .reply-button:disabled {
    color: #cecfd3 !important;
    border: 1px solid #cecfd3 !important;
  }

  #chatbot .reply-button-container .phone-call-button {
    font-weight: 800;
    font-size: 16px;
    border-radius: 16px;
    color: #ffffff;
    padding: 12px 24px;
    background-color: #14d599;
    border: 1px solid #14d599;
  }

  #chatbot .reply-button-container .phone-call-button:hover {
    color: #ffffff;
    background-color: #14d599;
    border: 1px solid #14d599;
  }

  #chatbot .phone-call-reply {
    padding: 12px 0;
    padding-left: 48px;
  }

  #chatbot .phone-call-reply a {
    font-weight: 800;
    font-size: 16px;
    border-radius: 16px;
    color: #ffffff;
    padding: 12px 24px;
    background-color: #14d599;
    border: 1px solid #14d599;
  }

  #chatbot .phone-call-reply a:hover {
    color: #ffffff !important;
    background-color: #14d599 !important;
    border: 1px solid #14d599 !important;
  }

  @media screen and (max-width: 800px) {
    #ChatbotAssistant {
      width: 400px;
      padding: 0 20px;
    }

    #chatbot .ChatrobotSender {
      padding: 12px;
      border-top: 1px solid #626b7733;
    }

    #chatbot .ChatrobotSender input {
      width: 100%;
      max-width: 100%;
    }

    #chatbot .ChatrobotSend {
      right: 32px;
    }
  }

  .chatbotAssistantHeader {
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    display: flex;
    position: fixed;
    padding: 20px 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    border-bottom: 1px solid #626b7733;
  }

  .chatbotAssistantHeader img {
    height: 30px;
  }

  .chatbotAssistantCard {
    margin: auto;
    margin-bottom: 24px;
    width: 640px;
    max-width: calc(100% - 20px);
  }

  .chatbotAssistantCard .chatbotAssistantCardContent {
    border-radius: 20px;
    padding: 20px 24px;
    border: 1px solid #626b7733;
    box-shadow: 0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814;
  }

  .chatbotAssistantCard .chatbotAssistantCardContent .chatbotAssistantCardContentWarning {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    border-radius: 10px;
    margin-bottom: 24px;
    text-align: center;
    color: #fd7d23;
    padding: 12px 20px;
    background-color: #fff8f2;
  }

  .chatbotAssistantCard .chatbotAssistantCardContent .chatbotAssistantCardContentText {
    font-weight: 400;
    line-height: 26px;
    font-size: 20px;
    text-align: center;
  }

  .chatbotAssistantOnline {
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chatbotAssistantOnline .chatbotAssistantOnlineAvatar {
    position: relative;
  }

  .chatbotAssistantOnline .chatbotAssistantOnlineAvatar .chatbotAssistantOnlineAvatarDot {
    top: 0;
    right: -4px;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    position: absolute;
    background-color: #2ac418;
  }

  .chatbotAssistantOnline .chatbotAssistantOnlineText {
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    line-height: 16.94px;
  }

  @media screen and (max-width: 1030px) {
    .chatbotAssistantHeader {
      padding: 16px 0;
    }

    .chatbotAssistantHeader img {
      height: 50px;
    }

    .chatbotAssistantCard {
      margin-bottom: 12px;
      width: 400px;
    }

    .chatbotAssistantCard .chatbotAssistantCardContent {
      padding: 18px;
      border-radius: 16px;
    }

    .chatbotAssistantCard .chatbotAssistantCardContent .chatbotAssistantCardContentWarning {
      font-size: 15px;
      margin-bottom: 18px;
    }

    .chatbotAssistantCard .chatbotAssistantCardContent .chatbotAssistantCardContentText {
      font-size: 18px;
    }

    .chatbotAssistantOnline .chatbotAssistantOnlineAvatar .chatbotAssistantOnlineAvatarDot {
      top: 0;
      right: 0;
      width: 8px;
      height: 8px;
    }

    .chatbotAssistantOnline .chatbotAssistantOnlineText {
      font-size: 15px;
      line-height: 15px;
    }
  }
  `;
document.body.appendChild(cssElement);

/** Create Events */
window.ChatrobotOnButtonClick = function (type) {
  if (type === "phone" && dataLayer) {
    dataLayer.push({ event: "cp_call_initiated_testing" });
    if (window.ChatRobotOnButtonClickCallBack) {
      window.ChatRobotOnButtonClickCallBack("cp_call_initiated_testing");
    }
  }
};

function createPage() {
  const appSettings = {
    isTest: !!window.leedobotData.isTest,
    searchIntent: !!window.leedobotData.isSearchIntent,
    botId: window.leedobotData.botId ? window.leedobotData.botId : "",
    logo: window.leedobotData.logoUrl ? window.leedobotData.logoUrl : "",
    intentId: window.leedobotData.intentId ? window.leedobotData.intentId : "",
    titleText: window.leedobotData.titleText ? window.leedobotData.titleText : "",
    phoneNumber: window.leedobotData.phoneNumber ? window.leedobotData.phoneNumber : "",
    avatarName: window.leedobotData.botAvatarName ? window.leedobotData.botAvatarName : "",
    avatar: window.leedobotData.botAvatarImageUrl ? window.leedobotData.botAvatarImageUrl : "",
    subTitleText: window.leedobotData.subtitleText ? window.leedobotData.subtitleText.replace(/\n/g, "<br>") : "",
    initialMessages: window.leedobotData.initialMessage
      ? window.leedobotData.initialMessage.split(/\n/).map((x) => x.trim())
      : [],
  };

  /** Create HTML */
  const htmlElement = document.createElement("div");
  htmlElement.id = "ChatbotAssistantPage";
  htmlElement.innerHTML = `
  <header class="chatbotAssistantHeader">
    <img src="${appSettings.logo}" />
  </header>
  <div class="chatbotAssistantCard">
    <div class="chatbotAssistantCardContent">
      <div class="chatbotAssistantCardContentWarning">${appSettings.titleText}</div>
      <div class="chatbotAssistantCardContentText">
        ${appSettings.subTitleText}
      </div>
    </div>
  </div>
  <div class="chatbotAssistantOnline">
    <div class="chatbotAssistantOnlineAvatar">
      <img alt="${appSettings.avatarName}" width="24" height="24" src="${appSettings.avatar}" />
      <div class="chatbotAssistantOnlineAvatarDot"></div>
    </div>
    <div class="chatbotAssistantOnlineText"><strong>${appSettings.avatarName}</strong> is ready to help.</div>
  </div>
  <div>
    <div id="ChatbotAssistant"></div>
  </div>
  `;

  const scriptElement = document.querySelector('script[id="LeedobotWidget"]');
  if (scriptElement) {
    scriptElement.insertAdjacentElement("afterend", htmlElement);
  }

  /** Create Chatbot Settings */
  const chatbotSettingsElement = document.createElement("script");
  chatbotSettingsElement.id = "chatbot-settings";
  chatbotSettingsElement.type = "application/json";
  chatbotSettingsElement.innerHTML = JSON.stringify({
    botId: appSettings.botId,
    startIntentId: appSettings.intentId,
    searchIntent: appSettings.searchIntent,
    queryParameters: true,
    initialMessages: appSettings.initialMessages,
    theme: {
      hideTime: true,
      hideHeader: true,
      scrollMode: "body",
      windowNumber: "__phoneNumber",
      container: "ChatbotAssistant",
      defaultAvatar: appSettings.avatar,
      staticNumber: appSettings.phoneNumber,
    },
  });
  document.body.appendChild(chatbotSettingsElement);

  /** Create Chatbot Script */
  const chatbotElement = document.createElement("script");
  chatbotElement.id = "chatbot-script";
  chatbotElement.type = "text/javascript";
  chatbotElement.src = `https://${
    appSettings.isTest ? "widget.test.leedobot.com" : "widget.leedobot.com"
  }/chatbot.js?v=${new Date().getTime()}`;
  document.body.appendChild(chatbotElement);
}

function waitForLeedobotData() {
  if (window.leedobotData) {
    createPage();
  } else {
    setTimeout(waitForLeedobotData, 100);
  }
}

waitForLeedobotData();
