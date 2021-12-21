import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x163ae94DEF8240beb42940d2560eaD58d27fa85C",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Book Stack",
        description: "This NFT will give you access to EduTipsDAO!",
        image: readFileSync("scripts/assets/bookstack.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()