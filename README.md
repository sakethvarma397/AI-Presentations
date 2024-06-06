# Generate presentations with just a prompt

The app uses openAI apis to generate the text summary and also to generate relevant images. All the content can then be converted into a PDF for download.

<img width="841" alt="Screenshot 2024-06-06 at 10 43 04 PM" src="https://github.com/sakethvarma397/AI-Presentations/assets/29940063/842044e2-23f7-4580-a6af-5205cb269cdb">

Sample PDF:
[a984a0f6-773d-4c4b-a462-9ba08c33955c.pdf](https://github.com/user-attachments/files/15664868/a984a0f6-773d-4c4b-a462-9ba08c33955c.pdf)


## Technical Details
- The app uses https://github.com/sakethvarma397/openai-proxy  as a proxy server for requests, which is independently deployed. This is to overcome the CORS issues for the images generated
- The default prompt can be customized in the https://github.com/sakethvarma397/openai-proxy to allow more variety.
