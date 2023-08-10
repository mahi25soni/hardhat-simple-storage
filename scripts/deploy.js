const env = require("hardhat")
const {ethers, run, network} = require("hardhat") // Why only {} are working not normall. And we are not importing ethers because ethers don;t have access to all files, but hardhat have
// network.config give all imformation about the network

async function main(){
  // No need of rpc-url and private key. Hardhat do it by itself. 
  const SimpleStorage = await ethers.getContractFactory('SimpleStorage')
  const simplestorage= await SimpleStorage.deploy()
  await simplestorage.deployed()
  console.log(simplestorage.address)

  if (network.config.chainId == 5 && process.env.ETHERSCAN_API_KEY){
    await simplestorage.deployTransaction.wait(6)
    await verify (simplestorage.address, [])
  }
}

async function verify(ContractAdress , args){
  console.log("Verify contract blah blah blah")

  try{
    await run("verify:verify", {
      address : ContractAdress,
      constructorArguments: args,
    })
  }
  catch (e) {
    if(e.message.toLowerCase().includes("already verified")){
      console.log("Already Verified")
    }
    else{
      console.log(e)
    }
  }
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })