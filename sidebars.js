/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  bridge: [
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'bridge/architecture',
        'bridge/glossary',
        {
          type: 'category',
          label: 'Contracts',
          items: [
            'bridge/contracts/bridge-token',
            'bridge/contracts/bridge-token-manager',
            'bridge/contracts/bridge-cosigner-manager',
            'bridge/contracts/bridge-router',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Network Details',
      items: [
        'bridge/network-details/deployed',
        'bridge/network-details/bridged-tokens',
      ],
    },
  ],
};

module.exports = sidebars;
