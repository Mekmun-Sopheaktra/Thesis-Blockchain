/*
SPDX-License-Identifier: Apache-2.0
*/

package main

import (
	"log"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
	"github.com/hyperledger/fabric-samples/asset-transfer-basic/chaincode-go/chaincode"
)

func main() {
	// Instantiate the SmartContract
	assetChaincode, err := contractapi.NewChaincode(&chaincode.SmartContract{})
	if err != nil {
		// Log the error if there is an issue creating the chaincode
		log.Panicf("Error creating asset-transfer-basic chaincode: %v", err)
	}

	// Start the chaincode
	if err := assetChaincode.Start(); err != nil {
		// Log the error if there is an issue starting the chaincode
		log.Panicf("Error starting asset-transfer-basic chaincode: %v", err)
	}
}
