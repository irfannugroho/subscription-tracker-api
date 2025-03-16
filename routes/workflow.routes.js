import { Router } from "express";
import { sendReminders } from "../controller/workflow.controller.js";

const worfkflowRouter = Router();

// import { workflowClient } from "../config/upstash.js";

worfkflowRouter.post('/subscription/reminder', sendReminders);

export default worfkflowRouter;


