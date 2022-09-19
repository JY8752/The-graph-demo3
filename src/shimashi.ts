import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  MetaTransactionExecuted as MetaTransactionExecutedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/Shimashi/Shimashi"
import {
  Approval,
  ApprovalForAll,
  MetaTransactionExecuted,
  OwnershipTransferred,
  Transfer
} from "../generated/schema"
import { ipfs, json } from "@graphprotocol/graph-ts"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleMetaTransactionExecuted(
  event: MetaTransactionExecutedEvent
): void {
  let entity = new MetaTransactionExecuted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.userAddress = event.params.userAddress
  entity.relayerAddress = event.params.relayerAddress
  entity.functionSignature = event.params.functionSignature
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  const metadataHash = "bafybeifxtaxrlfoszvqhioobomo454imsyo3udputxyxikbrg5cesp7qte"
  const metadata = ipfs.cat(`${metadataHash}/${event.params.tokenId.toString()}.json`)
  if(metadata) {
    const metadataJson = json.fromBytes(metadata).toObject()

    const image = metadataJson.get("image")
    if(image) {
      entity.image = image.toString()
    }

    const attributes = metadataJson.get("attributes")
    if(attributes) {
      const attributesArray = attributes.toArray()
      for(let i = 0; i < attributesArray.length; i++) {
        const item = attributesArray[i].toObject()
        const traitType = item.get("trait_type")
        const value = item.get("value")
        if(traitType && value) {
          if(traitType.toString() == "Personality") {
            entity.personality = value.toString()
          } else if(traitType.toString() == "Characteristics") {
            entity.characteristics = value.toString()
          } else if(traitType.toString() == "Cat or Dog Person") {
            entity.catOrDogPerson = value.toString()
          } else if(traitType.toString() == "Relationship Status") {
            entity.relationshipStatus = value.toString()
          } else if(traitType.toString() == "Ideal Vacation") {
            entity.idealVacation = value.toString()
          } else if(traitType.toString() == "Artistic Vocation") {
            entity.artisticVocation = value.toString()
          } else if(traitType.toString() == "Work Style") {
            entity.workStyle = value.toString()
          } else {
            //nop
          }
        }
      }
    }
  }

  entity.save()
}
