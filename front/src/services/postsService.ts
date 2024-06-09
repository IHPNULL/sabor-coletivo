import axios from "axios";

// axios.get("http://localhost:8080/posts/0");
export const getPosts = () =>
  axios.get("http://localhost:8080/posts/0", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjVmMTI3ZWQzN2ZlMTI4NTYwMTExMCIsImVtYWlsIjoiaXRhbG8uaGFhc3Bhc2NvbGlAZ21haWwuY29tIiwiaWF0IjoxNzE3OTU3MDA4LCJleHAiOjE3MTgxMjk4MDh9.AjaZJRjqpSPfQcPYonap4j76D78kYctpxarDWDTzD0Q",
    },
  });
