window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {name: "Encore 0.2.11-3", url: "swagger-encore-0.2.11-3.yaml"},
      {name: "Encore 0.2.11-2", url: "swagger-encore-0.2.11-2.yaml"},
      {name: "Encore 0.2.11-1", url: "swagger-encore-0.2.11-1.yaml"},
      {name: "Encore 0.2.10-1", url: "swagger-encore-0.2.10-1.yaml"},
      {name: "Encore 0.2.9-2", url: "swagger-encore-0.2.9-2.yaml"},
      {name: "Encore 0.2.9-1", url: "swagger-encore-0.2.9-1.yaml"},
      {name: "Encore 0.2.8-7", url: "swagger-encore-0.2.8-7.yaml"},
      {name: "Encore 0.2.8-6", url: "swagger-encore-0.2.8-6.yaml"},
      {name: "Encore 0.2.8-5", url: "swagger-encore-0.2.8-5.yaml"},
      {name: "Encore 0.2.8-4", url: "swagger-encore-0.2.8-4.yaml"},
      {name: "Encore 0.2.8-3", url: "swagger-encore-0.2.8-3.yaml"},
      {name: "Encore 0.2.6-4", url: "swagger-encore-0.2.6-4.yaml"}
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
