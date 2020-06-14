const express=require ("express");

/**
 * Start Nexus Server will instantiate an express app for you with the given port number
 * and it will automatically load the .nexus file found in the root of this folder.
 * @type {Express}
 */
require("@nexus-switchboard/nexus-core").startNexusServer("3001");

