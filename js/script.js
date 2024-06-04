const text = "juntem-se a nós na missão de limpar os mares, transformando cada reciclagem em uma onda de mudança positiva";

const speed = 50;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('#text-animado').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


window.watsonAssistantChatOptions = {
    integrationID: "f5c2cfc8-ac62-40ad-980d-a6f73af6e948", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "664e0483-55e7-43ef-b5c5-5a0f4b64c4e3", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

