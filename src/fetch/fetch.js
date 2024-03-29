// import axios from "axios";

// axios.defaults.baseURL = "http://www.w3.org/2003/05/soap-envelope";

// const ResponseData = (data) =>
//   `<env:Envelope
//   xmlns:env="http://www.w3.org/2003/05/soap-envelope"
//   xmlns:ns1="urn:ICUTech.Intf-IICUTech"
//   xmlns:xsd="http://www.w3.org/2001/XMLSchema"
//   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//   xmlns:enc="http://www.w3.org/2003/05/soap-encoding"
// >
//   <env:Body>
//     <ns1:Login env:encodingStyle="http://www.w3.org/2003/05/soap-encoding">
//       <UserName xsi:type="xsd:string">${data.username}</UserName>
//       <Password xsi:type="xsd:string">${data.password}</Password>
//       <IPs xsi:type="xsd:string"></IPs>
//     </ns1:Login>
//   </env:Body>
// </env:Envelope>`;

// export async function logInPost(data) {
//   const response = await axios.post(ResponseData(data));
//   return response.data;
// }

import axios from "axios";

const soapRequest = `<?xml version="1.0" encoding="UTF-8"?>
<env:Envelope 
  xmlns:env="http://www.w3.org/2003/05/soap-envelope" 
  xmlns:ns1="urn:ICUTech.Intf-IICUTech" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:enc="http://www.w3.org/2003/05/soap-encoding">
  <env:Body>
    <ns1:Login env:encodingStyle="http://www.w3.org/2003/05/soap-encoding">
      <UserName xsi:type="xsd:string">artur1@mail.com</UserName>
      <Password xsi:type="xsd:string">artur1</Password>
      <IPs xsi:type="xsd:string"></IPs>
    </ns1:Login>
  </env:Body>
</env:Envelope>`;

export async function logInPost(data) {
  const response = axios.post(
    "http://isapi.icu-tech.com/icutech-test.dll?mode=default",
    soapRequest,
    {
      headers: {
        "Content-Type": "application/soap+xml",
      },
    }
  );
  return response.data;
}
