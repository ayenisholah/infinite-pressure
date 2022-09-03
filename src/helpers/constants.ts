import { IObjectKeys, Trait } from '../types';

const sortFilters = ['Title', 'Least Time Left', 'Most Time Left', 'Highest Price', 'Lowest Price'];

export interface TraitValues {
  value: string;
  tokenIds: Array<number>;
}

export interface TraitGroup {
  traitType: string;
  traitValues: Array<TraitValues>;
}

export const openSeaUrl = 'https://opensea.io/assets/0x489e76bb343ee99fa370d2f14f02d44968b57ca6';
export const ipfsUrl = 'https://chainsaw.mypinata.cloud/ipfs/QmfNbcg1wTkAUJSzXQW9jwtgBYh5tDt8KeC3A6fh6n2LQN';

const traitTypes = ['Color Base', 'Color Advanced', 'Elements', 'Composition', 'Border', 'Collaboration', 'Collaborator'];

export const borderColor = '#a1926b';
export const collabColor = '#ff7ea2';

export const traitGradients: IObjectKeys = {
  'Blaze Camo': '/images/gradients/BlazeCamo.png',
  'Burner Ghost': '/images/gradients/BurnerGhost.png',
  'Canal Street Hermes': '/images/gradients/CanalStHermes.png',
  Ceramics: '/images/gradients/Ceramics.png',
  'Chromatic Aberration': '/images/gradients/ChromaticAberration.png',
  'Cobalt Oxide': '/images/gradients/CobaltOxide.png',
  'Cold Desert': '/images/gradients/ColdDesert.png',
  'Core Infinite': '/images/gradients/CoreInfinite.png',
  'Core Pressure': '/images/gradients/CorePressure.png',
  'Gold Pressure': '/images/gradients/GoldPressure.png',
  'Inner Earth': '/images/gradients/InnerEarth.png',
  Interference: '/images/gradients/Interference.png',
  'Jerome Az': '/images/gradients/JeromeAZ.png',
  Liminal: '/images/gradients/Liminal.png',
  MJ: '/images/gradients/MJ.png',
  'Magic Hour': '/images/gradients/MagicHour.png',
  'New Spring': '/images/gradients/NewSpring.png',
  'Obsidian Prism': '/images/gradients/ObsidianPrism.png',
  Obsidian: '/images/gradients/Obsidian.png',
  'Oil Film': '/images/gradients/OilFilm.png',
  Hexcode: '/images/gradients/Hexcode.png',
  'Perfume Heaven': '/images/gradients/PerfumeHeaven.png',
  Petrichor: '/images/gradients/Petrichor.png',
  'Photon Blacklight': '/images/gradients/PhotonBlacklight.png',
  'Red Medicine': '/images/gradients/RedMedicine.png',
  Saturator: '/images/gradients/Saturator.png',
  'Shock Ultraviolet': '/images/gradients/ShockUltraviolet.png',
  'Silver Pressure': '/images/gradients/SilverPressure.png',
  'Sludge Ultraviolet': '/images/gradients/SludgeUltraviolet.png',
  Subtrpical: '/images/gradients/Subtropical.png',
  'Swamp Blood': '/images/gradients/SwampBlood.png',
  Sweetness: '/images/gradients/Sweetness.png',
  Sylvie: '/images/gradients/Sylvie.png',
  'TV Death': '/images/gradients/TVDeath.png',
  'Violet Vintage': '/images/gradients/VioletVintage.png',
};

export const traits: Array<Trait> = [
  { traitType: 'Color Base', value: 'Monochromatic', color: '#adadad' },
  { traitType: 'Color Base', value: 'Polychromatic', color: '#37a0f1' },
  { traitType: 'Color Base', value: 'Hyperchromatic', color: '#ff007e' },
  { traitType: 'Color Advanced', value: 'Blaze Camo', gradient: '/images/gradients/BlazeCamo.png' },
  { traitType: 'Color Advanced', value: 'Burner Ghost', gradient: '/images/gradients/BurnerGhost.png' },
  { traitType: 'Color Advanced', value: 'Canal Street Hermes', gradient: '/images/gradients/CanalStHermes.png' },
  { traitType: 'Color Advanced', value: 'Ceramics', gradient: '/images/gradients/Ceramics.png' },
  { traitType: 'Color Advanced', value: 'Chromatic Aberration', gradient: '/images/gradients/ChromaticAberration.png' },
  { traitType: 'Color Advanced', value: 'Cobalt Oxide', gradient: '/images/gradients/CobaltOxide.png' },
  { traitType: 'Color Advanced', value: 'Cold Desert', gradient: '/images/gradients/ColdDesert.png' },
  { traitType: 'Color Advanced', value: 'Core Infinite', gradient: '/images/gradients/CoreInfinite.png' },
  { traitType: 'Color Advanced', value: 'Core Pressure', gradient: '/images/gradients/CorePressure.png' },
  { traitType: 'Color Advanced', value: 'Gold Pressure', gradient: '/images/gradients/GoldPressure.png' },
  { traitType: 'Color Advanced', value: 'Hexcode', gradient: '/images/gradients/Hexcode.png' },
  { traitType: 'Color Advanced', value: 'Inner Earth', gradient: '/images/gradients/InnerEarth.png' },
  { traitType: 'Color Advanced', value: 'Interference', gradient: '/images/gradients/Interference.png' },
  { traitType: 'Color Advanced', value: 'Jerome AZ', gradient: '/images/gradients/JeromeAZ.png' },
  { traitType: 'Color Advanced', value: 'Liminal', gradient: '/images/gradients/Liminal.png' },
  { traitType: 'Color Advanced', value: 'MJ', gradient: '/images/gradients/MJ.png' },
  { traitType: 'Color Advanced', value: 'Magic Hour', gradient: '/images/gradients/MagicHour.png' },
  { traitType: 'Color Advanced', value: 'New Spring', gradient: '/images/gradients/NewSpring.png' },
  { traitType: 'Color Advanced', value: 'Obsidian Prism', gradient: '/images/gradients/ObsidianPrism.png' },
  { traitType: 'Color Advanced', value: 'Obsidian', gradient: '/images/gradients/Obsidian.png' },
  { traitType: 'Color Advanced', value: 'Oil Film', gradient: '/images/gradients/OilFilm.png' },
  { traitType: 'Color Advanced', value: 'Perfume Heaven', gradient: '/images/gradients/PerfumeHeaven.png' },
  { traitType: 'Color Advanced', value: 'Petrichor', gradient: '/images/gradients/Petrichor.png' },
  { traitType: 'Color Advanced', value: 'Photon Blacklight', gradient: '/images/gradients/PhotonBlacklight.png' },
  { traitType: 'Color Advanced', value: 'Red Medicine', gradient: '/images/gradients/RedMedicine.png' },
  { traitType: 'Color Advanced', value: 'Saturator', gradient: '/images/gradients/Saturator.png' },
  { traitType: 'Color Advanced', value: 'Shock Ultraviolet', gradient: '/images/gradients/ShockUltraviolet.png' },
  { traitType: 'Color Advanced', value: 'Silver Pressure', gradient: '/images/gradients/SilverPressure.png' },
  { traitType: 'Color Advanced', value: 'Sludge Ultraviolet', gradient: '/images/gradients/SludgeUltraviolet.png' },
  { traitType: 'Color Advanced', value: 'Subtrpical', gradient: '/images/gradients/Subtropical.png' },
  { traitType: 'Color Advanced', value: 'Swamp Blood', gradient: '/images/gradients/SwampBlood.png' },
  { traitType: 'Color Advanced', value: 'Sweetness', gradient: '/images/gradients/Sweetness.png' },
  { traitType: 'Color Advanced', value: 'Sylvie', gradient: '/images/gradients/Sylvie.png' },
  { traitType: 'Color Advanced', value: 'TV Death', gradient: '/images/gradients/TVDeath.png' },
  { traitType: 'Color Advanced', value: 'Violet Vintage', gradient: '/images/gradients/VioletVintage.png' },
  { traitType: 'Elements', value: 'Chains', color: '#6000ff' },
  { traitType: 'Elements', value: 'Flora', color: '#6000ff' },
  { traitType: 'Elements', value: 'Light Leak', color: '#6000ff' },
  { traitType: 'Elements', value: 'Portals', color: '#6000ff' },
  { traitType: 'Elements', value: 'Security System', color: '#6000ff' },
  { traitType: 'Elements', value: 'Suns', color: '#6000ff' },
  { traitType: 'Elements', value: 'Totems', color: '#6000ff' },
  { traitType: 'Elements', value: 'Veins', color: '#6000ff' },
  { traitType: 'Composition', value: 'Abacus', color: '#213863' },
  { traitType: 'Composition', value: 'Building Blocks', color: '#213863' },
  { traitType: 'Composition', value: 'Chaos', color: '#213863' },
  { traitType: 'Composition', value: 'Drip', color: '#213863' },
  { traitType: 'Composition', value: 'Emulsion', color: '#213863' },
  { traitType: 'Composition', value: 'Fragment', color: '#213863' },
  { traitType: 'Composition', value: 'Gridgrinder', color: '#213863' },
  { traitType: 'Composition', value: 'Mirror', color: '#213863' },
  { traitType: 'Composition', value: 'Pressurelab', color: '#213863' },
  { traitType: 'Composition', value: 'Vortex', color: '#213863' },
  { traitType: 'Composition', value: 'Weaver', color: '#213863' },
  { traitType: 'Border', value: 'TRUE', color: '#a1926b' },
  { traitType: 'Collaboration', value: 'TRUE', color: '#ff7ea2' },
  { traitType: 'Collaborator', value: 'Gremplin', color: '#ff9759' },
  { traitType: 'Collaborator', value: 'Case Simmons', color: '#ff9759' },
  { traitType: 'Collaborator', value: 'Maalavidaa', color: '#ff9759' },
  { traitType: 'Collaborator', value: 'Oseanworld', color: '#ff9759' },
  { traitType: 'Collaborator', value: 'Ezra Miller', color: '#ff9759' },
  { traitType: 'Collaborator', value: 'Jen Stark', color: '#ff9759' },
  { traitType: 'Collaborator', value: 'CRVM', color: '#ff9759' },
  { traitType: 'Collaborator', value: 'Joshua Davis', color: '#ff9759' },
  { traitType: 'Collaborator', value: 'IX Shells', color: '#ff9759' },
];

const moralisConfig = {
  appId: process.env.NEXT_PUBLIC_MORALIS_APP_ID || '',
  serverUrl: process.env.NEXT_PUBLIC_MORALIS_SERVER_URL || '',
};

const reactQueryStaleTime = 10; // 10 seconds
const tokenContract = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS || '';
const auctionHouseContract = process.env.NEXT_PUBLIC_AUCTION_HOUSE_CONTRACT_ADDRESS || '';
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';
const minimumBidPercentage = 1.05;

const bidMessages: { [key: string]: string } = {
  empty: 'Try entering a bid...',
  fail: 'Bid FAILED! Please try again in a few minutes..',
  success: 'Bid Placed Successfully',
  mining: 'Processing Bid',
  signging: 'Awaiting signature',
};

export const jDavisUrl = 'https://chainsaw.mypinata.cloud/ipfs/QmdvqteKd5zdaCnDbKjoaMEFPXPp89uF8EJZ9Udspd3wND/080.mp4';
export const oseanUrl = 'https://chainsaw.mypinata.cloud/ipfs/QmdvqteKd5zdaCnDbKjoaMEFPXPp89uF8EJZ9Udspd3wND/40.mp4';

const getBidderMessage = (key: string, minimumBid = '') => {
  if (key !== 'minimum bid') return bidMessages[key];

  return `Next Bid Minimum: ${minimumBid}`;
};

const contractAbi = [
  {
    inputs: [
      { internalType: 'address', name: '_weth', type: 'address' },
      { internalType: 'address[]', name: 'auctioneers', type: 'address[]' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'auctionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'bidTime',
        type: 'uint256',
      },
      { indexed: false, internalType: 'bool', name: 'firstBid', type: 'bool' },
      { indexed: false, internalType: 'bool', name: 'extended', type: 'bool' },
    ],
    name: 'AuctionBid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'auctionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenOwner',
        type: 'address',
      },
    ],
    name: 'AuctionCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'auctionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reservePrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'auctionCurrency',
        type: 'address',
      },
    ],
    name: 'AuctionCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'auctionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
    ],
    name: 'AuctionDurationExtended',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'auctionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'auctionCurrency',
        type: 'address',
      },
    ],
    name: 'AuctionEnded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'auctionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reservePrice',
        type: 'uint256',
      },
    ],
    name: 'AuctionReservePriceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'auctionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'beneficiaryAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'royaltyAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'auctionCurrency',
        type: 'address',
      },
    ],
    name: 'AuctionWithRoyaltiesEnded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newBeneficiary',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'royaltyPercentage',
        type: 'uint256',
      },
    ],
    name: 'RoyaltySet',
    type: 'event',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    inputs: [],
    name: 'AUCTIONEER',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'who', type: 'address' }],
    name: 'addAuctioneer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'auctions',
    outputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'address', name: 'tokenContract', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'duration', type: 'uint256' },
      { internalType: 'uint256', name: 'firstBidTime', type: 'uint256' },
      { internalType: 'uint256', name: 'reservePrice', type: 'uint256' },
      { internalType: 'address', name: 'tokenOwner', type: 'address' },
      { internalType: 'address payable', name: 'bidder', type: 'address' },
      { internalType: 'address', name: 'auctionCurrency', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'auctionId', type: 'uint256' }],
    name: 'cancelAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'address', name: 'tokenContract', type: 'address' },
      { internalType: 'uint256', name: 'duration', type: 'uint256' },
      { internalType: 'uint256', name: 'reservePrice', type: 'uint256' },
      { internalType: 'address', name: 'auctionCurrency', type: 'address' },
    ],
    name: 'createAuction',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'auctionId', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'createBid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'auctionId', type: 'uint256' }],
    name: 'endAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'who', type: 'address' }],
    name: 'isAuctioneer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sellerOrTekenContract',
        type: 'address',
      },
    ],
    name: 'isWhitelisted',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minBidIncrementPercentage',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'publicAuctionsEnabled',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'who', type: 'address' }],
    name: 'removeAuctioneer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sellerOrTokenContract',
        type: 'address',
      },
    ],
    name: 'removeWhitelistedAccount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'royaltyRegistry',
    outputs: [
      { internalType: 'address payable', name: 'beneficiary', type: 'address' },
      { internalType: 'uint256', name: 'royaltyPercentage', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'auctionId', type: 'uint256' },
      { internalType: 'uint256', name: 'reservePrice', type: 'uint256' },
    ],
    name: 'setAuctionReservePrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bool', name: 'status', type: 'bool' }],
    name: 'setPublicAuctionsEnabled',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'tokenContract', type: 'address' },
      { internalType: 'address payable', name: 'beneficiary', type: 'address' },
      { internalType: 'uint256', name: 'royaltyPercentage', type: 'uint256' },
    ],
    name: 'setRoyalty',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeBuffer',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'wethAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sellerOrTokenContract',
        type: 'address',
      },
    ],
    name: 'whitelistAccount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'whitelistedAccounts',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];

export { sortFilters, traitTypes, moralisConfig, tokenContract, projectId, auctionHouseContract, contractAbi, minimumBidPercentage, bidMessages, getBidderMessage, reactQueryStaleTime };
