const { task } = require("hardhat/config")

task('block-number', "Return the block number").setAction(
    async (taskArgs, hre) => {
        const blocknumber = await hre.ethers.provider.getBlockNumber()
        console.log(blocknumber)
    }
)
