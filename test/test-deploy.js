const { ethers } = require('hardhat')
const { expect , assert } = require("chai");
describe("SimpleStorage", function() {
  let simpleStorageFactory, simpleStorage
  beforeEach(async function () {
      simpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
      simpleStorage = await simpleStorageFactory.deploy() 
  })

  it ("Should start with a favorite number 0", async function () {
    const number = await simpleStorage.retrieve()
    const enterednumber = "0"
    assert.equal(number.toString() , enterednumber)
  })
  it ("Should update when we call store ", async function () {
    const number = "7"
    const enterednumber = await simpleStorage.store(number)
    const currentvalue =  await simpleStorage.retrieve()

    assert.equal(number.toString() , currentvalue)

  })

})