export const ui = {
  logo: 'http://ih1.redbubble.net/image.181146356.8650/sticker,375x360.u1.png',
};

export const content = {
  introduction: {
    title: "Lil' Bits catering for group events",
    subTitle: '',
    paragraphs: [
      `We provide catering services for events of any type using our freshly cooked dishes of Icelandic delicacies.`,
      "We are always here for you when you need a professional catering service with that wholesome home-cooked touch. We are always here for you when you feel like a Lil' Bits.",
    ],
  },
  invitation: {
    title: '',
    subTitle: '',
    paragraphs: [
      'Dishes are presented as suggestions based on your category selection. We are happy to advice you personally if you contact us.',
    ],
  },
  checkOrder: {
    title: 'Check your Order',
    subTitle: 'Enter your e-mail or reference number',
    paragraphs: [
      `Please contact us if you can not find your order in our system.`,
    ],
  },
  previews: {
    items: [
      {
        description: 'foods',
        link: 'https://madklubben.dk/wp-content/uploads/2020/07/restaurant_hero_FCKbh.jpg',
      },
      {
        description: 'pizza',
        link: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg',
      },
      {
        description: 'foods',
        link: 'https://pagen.se/globalassets/recept/street_food_roror_tillbehor.jpg',
      },
      {
        description: 'sandwich',
        link: 'https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg',
      },

      {
        description: 'burger',
        link: 'https://cdn.stocksnap.io/img-thumbs/960w/bread-bun_UGX0HQQPWI.jpg',
      },
      {
        description: 'icelandic food',
        link: 'https://traveladestatic.imgix.net/media/original_images/gourmet-restaurants-and-street-food-try-iceland.jpg',
      },
    ],
  },
};

export const form = {
  inputs: [
    { label: 'Name', color: 'warning', key: 'name', type: 'text' },
    { label: 'Phone Number', color: 'warning', key: 'number', type: 'number' },
    { label: 'E-mail Address', color: 'warning', key: 'mail', type: 'text' },
    { label: 'Occasion', color: 'warning', key: 'event', type: 'text' },
    {
      label: 'Estimated amount of guests',
      color: 'warning',
      key: 'guests',
      type: 'text',
    },
  ],
  textarea: {
    label: 'Anything else you would like to specify',
    color: 'warning',
    key: 'other',
    type: 'text',
  },
};
