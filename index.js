export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'kibana_menu_item_plugin',
    uiExports: {
      links: [
        {
          icon: 'plugins/infra/images/logging_mono_white.svg',
          euiIconType: 'loggingApp',
          id: 'logstash:dashboard',
          order: 8002,
          title: 'Logstash',
          url: `kibana#/dashboard/16b99730-359d-11e9-8c84-8f31b106450a`,
        },
      ],
    },
    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
