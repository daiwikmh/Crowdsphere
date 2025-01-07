/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { CrowdFunding, CrowdFundingInterface } from "../CrowdFunding";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaigns",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balances",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_image",
        type: "string",
      },
    ],
    name: "createCampaign",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "donateToCampaign",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCampaigns",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "target",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balances",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "donators",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "donations",
            type: "uint256[]",
          },
        ],
        internalType: "struct CrowdFunding.Campaign[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getDonators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfCampaigns",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b50611bf8806100256000396000f3fe6080604052600436106100555760003560e01c806307ca140d1461005a5780630fa91fa914610085578063141961bc146100c357806342a4fda814610106578063a6b0363314610122578063d4e3dd6f1461014d575b600080fd5b34801561006657600080fd5b5061006f61018a565b60405161007c9190610ccd565b60405180910390f35b34801561009157600080fd5b506100ac60048036038101906100a79190610d28565b610190565b6040516100ba929190610f03565b60405180910390f35b3480156100cf57600080fd5b506100ea60048036038101906100e59190610d28565b6102a0565b6040516100fd9796959493929190610fd9565b60405180910390f35b610120600480360381019061011b9190610d28565b61049a565b005b34801561012e57600080fd5b50610137610765565b6040516101449190611328565b60405180910390f35b34801561015957600080fd5b50610174600480360381019061016f919061147f565b610b2f565b6040516101819190610ccd565b60405180910390f35b60015481565b6060806000808481526020019081526020016000206007016000808581526020019081526020016000206008018180548060200260200160405190810160405280929190818152602001828054801561023e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101f4575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561029057602002820191906000526020600020905b81548152602001906001019080831161027c575b5050505050905091509150915091565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546102e99061157d565b80601f01602080910402602001604051908101604052809291908181526020018280546103159061157d565b80156103625780601f1061033757610100808354040283529160200191610362565b820191906000526020600020905b81548152906001019060200180831161034557829003601f168201915b5050505050908060020180546103779061157d565b80601f01602080910402602001604051908101604052809291908181526020018280546103a39061157d565b80156103f05780601f106103c5576101008083540402835291602001916103f0565b820191906000526020600020905b8154815290600101906020018083116103d357829003601f168201915b5050505050908060030154908060040154908060050154908060060180546104179061157d565b80601f01602080910402602001604051908101604052809291908181526020018280546104439061157d565b80156104905780601f1061046557610100808354040283529160200191610490565b820191906000526020600020905b81548152906001019060200180831161047357829003601f168201915b5050505050905087565b600034905060008060008481526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610548576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053f906115fa565b60405180910390fd5b8060040154421061058e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058590611666565b60405180910390fd5b80600301548282600501546105a391906116b5565b11156105e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105db90611735565b60405180910390fd5b80600701339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060080182908060018154018082558091505060019003906000526020600020016000909190919091505560008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16836040516106be90611786565b60006040518083038185875af1925050503d80600081146106fb576040519150601f19603f3d011682016040523d82523d6000602084013e610700565b606091505b5050905080610744576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073b906117e7565b60405180910390fd5b8282600501600082825461075891906116b5565b9250508190555050505050565b6060600060015467ffffffffffffffff81111561078557610784611354565b5b6040519080825280602002602001820160405280156107be57816020015b6107ab610c52565b8152602001906001900390816107a35790505b50905060005b600154811015610b2757600080828152602001908152602001600020604051806101200160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546108529061157d565b80601f016020809104026020016040519081016040528092919081815260200182805461087e9061157d565b80156108cb5780601f106108a0576101008083540402835291602001916108cb565b820191906000526020600020905b8154815290600101906020018083116108ae57829003601f168201915b505050505081526020016002820180546108e49061157d565b80601f01602080910402602001604051908101604052809291908181526020018280546109109061157d565b801561095d5780601f106109325761010080835404028352916020019161095d565b820191906000526020600020905b81548152906001019060200180831161094057829003601f168201915b505050505081526020016003820154815260200160048201548152602001600582015481526020016006820180546109949061157d565b80601f01602080910402602001604051908101604052809291908181526020018280546109c09061157d565b8015610a0d5780601f106109e257610100808354040283529160200191610a0d565b820191906000526020600020905b8154815290600101906020018083116109f057829003601f168201915b5050505050815260200160078201805480602002602001604051908101604052809291908181526020018280548015610a9b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610a51575b5050505050815260200160088201805480602002602001604051908101604052809291908181526020018280548015610af357602002820191906000526020600020905b815481526020019060010190808311610adf575b505050505081525050828281518110610b0f57610b0e611807565b5b602002602001018190525080806001019150506107c4565b508091505090565b6000428311610b73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6a906118a8565b60405180910390fd5b600080600060015481526020019081526020016000209050338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086816001019081610bdf9190611a74565b5085816002019081610bf19190611a74565b508481600301819055508381600401819055506000816005018190555082816006019081610c1f9190611a74565b5060016000815480929190610c3390611b46565b919050555060018054610c469190611b8e565b91505095945050505050565b604051806101200160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016000815260200160008152602001600081526020016060815260200160608152602001606081525090565b6000819050919050565b610cc781610cb4565b82525050565b6000602082019050610ce26000830184610cbe565b92915050565b6000604051905090565b600080fd5b600080fd5b610d0581610cb4565b8114610d1057600080fd5b50565b600081359050610d2281610cfc565b92915050565b600060208284031215610d3e57610d3d610cf2565b5b6000610d4c84828501610d13565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610dac82610d81565b9050919050565b610dbc81610da1565b82525050565b6000610dce8383610db3565b60208301905092915050565b6000602082019050919050565b6000610df282610d55565b610dfc8185610d60565b9350610e0783610d71565b8060005b83811015610e38578151610e1f8882610dc2565b9750610e2a83610dda565b925050600181019050610e0b565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610e7a81610cb4565b82525050565b6000610e8c8383610e71565b60208301905092915050565b6000602082019050919050565b6000610eb082610e45565b610eba8185610e50565b9350610ec583610e61565b8060005b83811015610ef6578151610edd8882610e80565b9750610ee883610e98565b925050600181019050610ec9565b5085935050505092915050565b60006040820190508181036000830152610f1d8185610de7565b90508181036020830152610f318184610ea5565b90509392505050565b610f4381610da1565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f83578082015181840152602081019050610f68565b60008484015250505050565b6000601f19601f8301169050919050565b6000610fab82610f49565b610fb58185610f54565b9350610fc5818560208601610f65565b610fce81610f8f565b840191505092915050565b600060e082019050610fee600083018a610f3a565b81810360208301526110008189610fa0565b905081810360408301526110148188610fa0565b90506110236060830187610cbe565b6110306080830186610cbe565b61103d60a0830185610cbe565b81810360c083015261104f8184610fa0565b905098975050505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006110a582610f49565b6110af8185611089565b93506110bf818560208601610f65565b6110c881610f8f565b840191505092915050565b600082825260208201905092915050565b60006110ef82610d55565b6110f981856110d3565b935061110483610d71565b8060005b8381101561113557815161111c8882610dc2565b975061112783610dda565b925050600181019050611108565b5085935050505092915050565b600082825260208201905092915050565b600061115e82610e45565b6111688185611142565b935061117383610e61565b8060005b838110156111a457815161118b8882610e80565b975061119683610e98565b925050600181019050611177565b5085935050505092915050565b6000610120830160008301516111ca6000860182610db3565b50602083015184820360208601526111e2828261109a565b915050604083015184820360408601526111fc828261109a565b91505060608301516112116060860182610e71565b5060808301516112246080860182610e71565b5060a083015161123760a0860182610e71565b5060c083015184820360c086015261124f828261109a565b91505060e083015184820360e086015261126982826110e4565b9150506101008301518482036101008601526112858282611153565b9150508091505092915050565b600061129e83836111b1565b905092915050565b6000602082019050919050565b60006112be8261105d565b6112c88185611068565b9350836020820285016112da85611079565b8060005b8581101561131657848403895281516112f78582611292565b9450611302836112a6565b925060208a019950506001810190506112de565b50829750879550505050505092915050565b6000602082019050818103600083015261134281846112b3565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61138c82610f8f565b810181811067ffffffffffffffff821117156113ab576113aa611354565b5b80604052505050565b60006113be610ce8565b90506113ca8282611383565b919050565b600067ffffffffffffffff8211156113ea576113e9611354565b5b6113f382610f8f565b9050602081019050919050565b82818337600083830152505050565b600061142261141d846113cf565b6113b4565b90508281526020810184848401111561143e5761143d61134f565b5b611449848285611400565b509392505050565b600082601f8301126114665761146561134a565b5b813561147684826020860161140f565b91505092915050565b600080600080600060a0868803121561149b5761149a610cf2565b5b600086013567ffffffffffffffff8111156114b9576114b8610cf7565b5b6114c588828901611451565b955050602086013567ffffffffffffffff8111156114e6576114e5610cf7565b5b6114f288828901611451565b945050604061150388828901610d13565b935050606061151488828901610d13565b925050608086013567ffffffffffffffff81111561153557611534610cf7565b5b61154188828901611451565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061159557607f821691505b6020821081036115a8576115a761154e565b5b50919050565b7f43616d706169676e20646f6573206e6f74206578697374000000000000000000600082015250565b60006115e4601783610f54565b91506115ef826115ae565b602082019050919050565b60006020820190508181036000830152611613816115d7565b9050919050565b7f43616d706169676e2068617320656e6465640000000000000000000000000000600082015250565b6000611650601283610f54565b915061165b8261161a565b602082019050919050565b6000602082019050818103600083015261167f81611643565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006116c082610cb4565b91506116cb83610cb4565b92508282019050808211156116e3576116e2611686565b5b92915050565b7f54617267657420616d6f756e7420657863656564656400000000000000000000600082015250565b600061171f601683610f54565b915061172a826116e9565b602082019050919050565b6000602082019050818103600083015261174e81611712565b9050919050565b600081905092915050565b50565b6000611770600083611755565b915061177b82611760565b600082019050919050565b600061179182611763565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b60006117d1601483610f54565b91506117dc8261179b565b602082019050919050565b60006020820190508181036000830152611800816117c4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f54686520646561646c696e65206d75737420626520696e20746865206675747560008201527f7265000000000000000000000000000000000000000000000000000000000000602082015250565b6000611892602283610f54565b915061189d82611836565b604082019050919050565b600060208201905081810360008301526118c181611885565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261192a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826118ed565b61193486836118ed565b95508019841693508086168417925050509392505050565b6000819050919050565b600061197161196c61196784610cb4565b61194c565b610cb4565b9050919050565b6000819050919050565b61198b83611956565b61199f61199782611978565b8484546118fa565b825550505050565b600090565b6119b46119a7565b6119bf818484611982565b505050565b5b818110156119e3576119d86000826119ac565b6001810190506119c5565b5050565b601f821115611a28576119f9816118c8565b611a02846118dd565b81016020851015611a11578190505b611a25611a1d856118dd565b8301826119c4565b50505b505050565b600082821c905092915050565b6000611a4b60001984600802611a2d565b1980831691505092915050565b6000611a648383611a3a565b9150826002028217905092915050565b611a7d82610f49565b67ffffffffffffffff811115611a9657611a95611354565b5b611aa0825461157d565b611aab8282856119e7565b600060209050601f831160018114611ade5760008415611acc578287015190505b611ad68582611a58565b865550611b3e565b601f198416611aec866118c8565b60005b82811015611b1457848901518255600182019150602085019450602081019050611aef565b86831015611b315784890151611b2d601f891682611a3a565b8355505b6001600288020188555050505b505050505050565b6000611b5182610cb4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611b8357611b82611686565b5b600182019050919050565b6000611b9982610cb4565b9150611ba483610cb4565b9250828203905081811115611bbc57611bbb611686565b5b9291505056fea2646970667358221220d7d0a62b8d9c9eb5a535ccdd34f4bae5c63016b662d52768dc6ed9a968c9154464736f6c63430008180033";

type CrowdFundingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdFundingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrowdFunding__factory extends ContractFactory {
  constructor(...args: CrowdFundingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CrowdFunding & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CrowdFunding__factory {
    return super.connect(runner) as CrowdFunding__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdFundingInterface {
    return new Interface(_abi) as CrowdFundingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CrowdFunding {
    return new Contract(address, _abi, runner) as unknown as CrowdFunding;
  }
}
