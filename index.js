// index.js
const awsInstanceMetadata = require('aws-instance-metadata');

const app = require("express")();

awsInstanceMetadata.fetch('instance-id').then((instanceId) => {
  app.get("/", (request, response) => {
      return response.send(`
          <br />
          <br />
          <center>
              <h1>
                  Hello 👋 from AWS EC2 your instance id is: `+ instanceId +`
              </h1>
          </center>
      `);
  });

  app.listen(8080, () => console.log("Server running!!!"));
}, console.error);
