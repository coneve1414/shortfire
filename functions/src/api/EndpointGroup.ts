import * as express from "express";

interface EndpointGroup {
  setup(): express.Router
}

export default EndpointGroup