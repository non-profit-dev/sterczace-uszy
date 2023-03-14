"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8056],{

/***/ 46162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProtectedListView)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(2784);
// EXTERNAL MODULE: ../../node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(6843);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(1397);
// EXTERNAL MODULE: ../../node_modules/react-intl/index.js
var react_intl = __webpack_require__(35516);
// EXTERNAL MODULE: ../../node_modules/react-query/lib/index.js
var lib = __webpack_require__(31867);
// EXTERNAL MODULE: ../../node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(89613);
// EXTERNAL MODULE: ../../node_modules/@strapi/admin/node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(13000);
var qs_lib_default = /*#__PURE__*/__webpack_require__.n(qs_lib);
// EXTERNAL MODULE: ../../node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(48766);
// EXTERNAL MODULE: ../../node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(2459);
// EXTERNAL MODULE: ../../node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(34001);
// EXTERNAL MODULE: ../../node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(12634);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var utils = __webpack_require__(4857);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/utils/tableHeaders.js
const tableHeaders = [
  {
    name: "name",
    key: "name",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.name",
        defaultMessage: "Name"
      },
      sortable: true
    }
  },
  {
    name: "description",
    key: "description",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.description",
        defaultMessage: "Description"
      },
      sortable: false
    }
  },
  {
    name: "type",
    key: "type",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.type",
        defaultMessage: "Token type"
      },
      sortable: false
    }
  },
  {
    name: "createdAt",
    key: "createdAt",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.createdAt",
        defaultMessage: "Created at"
      },
      sortable: false
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

// EXTERNAL MODULE: ../../node_modules/prop-types/index.js
var prop_types = __webpack_require__(13980);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(18704);
// EXTERNAL MODULE: ../../node_modules/@strapi/design-system/Table.js
var Table = __webpack_require__(98280);
// EXTERNAL MODULE: ../../node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(48374);
// EXTERNAL MODULE: ../../node_modules/@strapi/icons/Trash.js
var Trash = __webpack_require__(30558);
var Trash_default = /*#__PURE__*/__webpack_require__.n(Trash);
// EXTERNAL MODULE: ../../node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(46872);
// EXTERNAL MODULE: ../../node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(79838);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/DeleteButton/index.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};







const DeleteButton = ({ tokenName, onClickDelete }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  return /* @__PURE__ */ react.createElement(Box.Box, __spreadValues({
    paddingLeft: 1
  }, build.stopPropagation), /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: () => {
      trackUsage("willDeleteToken");
      onClickDelete();
    },
    label: formatMessage(
      {
        id: "global.delete-target",
        defaultMessage: "Delete {target}"
      },
      { target: `${tokenName}` }
    ),
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((Trash_default()), null)
  }));
};
DeleteButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  onClickDelete: (prop_types_default()).func.isRequired
};
/* harmony default export */ const DynamicTable_DeleteButton = (DeleteButton);

// EXTERNAL MODULE: ../../node_modules/@strapi/icons/Pencil.js
var Pencil = __webpack_require__(90307);
var Pencil_default = /*#__PURE__*/__webpack_require__.n(Pencil);
// EXTERNAL MODULE: ../../node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(1257);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/UpdateButton/index.js







const LinkUpdate = (0,styled_components_browser_cjs["default"])(build.Link)`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }
`;
const UpdateButton = ({ tokenName, tokenId }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  return /* @__PURE__ */ react.createElement(LinkUpdate, {
    to: `${pathname}/${tokenId}`,
    title: formatMessage(
      {
        id: "app.component.table.edit",
        defaultMessage: "Edit {target}"
      },
      { target: `${tokenName}` }
    )
  }, /* @__PURE__ */ react.createElement((Pencil_default()), null));
};
UpdateButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const DynamicTable_UpdateButton = (UpdateButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/index.js
var DynamicTable_defProp = Object.defineProperty;
var DynamicTable_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DynamicTable_hasOwnProp = Object.prototype.hasOwnProperty;
var DynamicTable_propIsEnum = Object.prototype.propertyIsEnumerable;
var DynamicTable_defNormalProp = (obj, key, value) => key in obj ? DynamicTable_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DynamicTable_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DynamicTable_hasOwnProp.call(b, prop))
      DynamicTable_defNormalProp(a, prop, b[prop]);
  if (DynamicTable_getOwnPropSymbols)
    for (var prop of DynamicTable_getOwnPropSymbols(b)) {
      if (DynamicTable_propIsEnum.call(b, prop))
        DynamicTable_defNormalProp(a, prop, b[prop]);
    }
  return a;
};










const TableRows = ({ canDelete, canUpdate, onClickDelete, withBulkActions, rows }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [{ query }] = (0,build.useQueryParams)();
  const [, sortOrder] = query.sort.split(":");
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,build.useTracking)();
  const apiTokens = rows.sort((a, b) => {
    const comparaison = a.name.localeCompare(b.name);
    return sortOrder === "DESC" ? -comparaison : comparaison;
  });
  return /* @__PURE__ */ react.createElement(Table.Tbody, null, apiTokens.map((apiToken) => {
    return /* @__PURE__ */ react.createElement(Table.Tr, DynamicTable_spreadValues({
      key: apiToken.id
    }, (0,build.onRowClick)({
      fn() {
        trackUsage("willEditTokenFromList");
        push(`${pathname}/${apiToken.id}`);
      },
      condition: canUpdate
    })), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
      textColor: "neutral800",
      fontWeight: "bold"
    }, apiToken.name)), /* @__PURE__ */ react.createElement(Table.Td, {
      maxWidth: (0,build.pxToRem)(250)
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      textColor: "neutral800",
      ellipsis: true
    }, apiToken.description)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
      textColor: "neutral800"
    }, formatMessage({
      id: `Settings.apiTokens.types.${apiToken.type}`,
      defaultMessage: "Type unknown"
    }))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
      textColor: "neutral800"
    }, /* @__PURE__ */ react.createElement(build.RelativeTime, {
      timestamp: new Date(apiToken.createdAt)
    }))), withBulkActions && /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
      justifyContent: "end"
    }, canUpdate && /* @__PURE__ */ react.createElement(DynamicTable_UpdateButton, {
      tokenName: apiToken.name,
      tokenId: apiToken.id
    }), canDelete && /* @__PURE__ */ react.createElement(DynamicTable_DeleteButton, {
      tokenName: apiToken.name,
      onClickDelete: () => onClickDelete(apiToken.id)
    }))));
  }));
};
TableRows.defaultProps = {
  canDelete: false,
  canUpdate: false,
  onClickDelete() {
  },
  rows: [],
  withBulkActions: false
};
TableRows.propTypes = {
  canDelete: (prop_types_default()).bool,
  canUpdate: (prop_types_default()).bool,
  onClickDelete: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable = (TableRows);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/index.js
var ListView_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ListView_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListView_hasOwnProp = Object.prototype.hasOwnProperty;
var ListView_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListView_defNormalProp = (obj, key, value) => key in obj ? ListView_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListView_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListView_hasOwnProp.call(b, prop))
      ListView_defNormalProp(a, prop, b[prop]);
  if (ListView_getOwnPropSymbols)
    for (var prop of ListView_getOwnPropSymbols(b)) {
      if (ListView_propIsEnum.call(b, prop))
        ListView_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};














const ApiTokenListView = () => {
  (0,build.useFocusWhenNavigate)();
  const queryClient = (0,lib.useQueryClient)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,build.useNotification)();
  const {
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = (0,build.useRBAC)(permissions/* default.settings.api-tokens */.Z.settings["api-tokens"]);
  const { push } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,build.useTracking)();
  const { startSection } = (0,build.useGuidedTour)();
  const startSectionRef = (0,react.useRef)(startSection);
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("apiTokens");
    }
  }, []);
  (0,react.useEffect)(() => {
    push({ search: qs_lib_default().stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  const headers = utils_tableHeaders.map((header) => __spreadProps(ListView_spreadValues({}, header), {
    metadatas: __spreadProps(ListView_spreadValues({}, header.metadatas), {
      label: formatMessage(header.metadatas.label)
    })
  }));
  const {
    data: apiTokens,
    status,
    isFetching
  } = (0,lib.useQuery)(
    ["api-tokens"],
    () => __async(void 0, null, function* () {
      trackUsage("willAccessTokenList");
      const {
        data: { data }
      } = yield utils/* axiosInstance.get */.be.get(`/admin/api-tokens`);
      trackUsage("didAccessTokenList", { number: data.length });
      return data;
    }),
    {
      enabled: canRead,
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const isLoading = canRead && (status !== "success" && status !== "error" || status === "success" && isFetching);
  const deleteMutation = (0,lib.useMutation)(
    (id) => __async(void 0, null, function* () {
      yield utils/* axiosInstance.delete */.be["delete"](`/admin/api-tokens/${id}`);
    }),
    {
      onSuccess() {
        return __async(this, null, function* () {
          yield queryClient.invalidateQueries(["api-tokens"]);
          trackUsage("didDeleteToken");
        });
      },
      onError(err) {
        var _a2, _b;
        if ((_b = (_a2 = err == null ? void 0 : err.response) == null ? void 0 : _a2.data) == null ? void 0 : _b.data) {
          toggleNotification({ type: "warning", message: err.response.data.data });
        } else {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error", defaultMessage: "An error occured" }
          });
        }
      }
    }
  );
  const shouldDisplayDynamicTable = canRead && apiTokens;
  const shouldDisplayNoContent = canRead && !apiTokens && !canCreate;
  const shouldDisplayNoContentWithCreationButton = canRead && !apiTokens && canCreate;
  return /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": isLoading
  }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: "API Tokens"
  }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: formatMessage({ id: "Settings.apiTokens.title", defaultMessage: "API Tokens" }),
    subtitle: formatMessage({
      id: "Settings.apiTokens.description",
      defaultMessage: "List of generated tokens to consume the API"
    }),
    primaryAction: canCreate ? /* @__PURE__ */ react.createElement(build.LinkButton, {
      "data-testid": "create-api-token-button",
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      size: "L",
      onClick: () => trackUsage("willAddTokenFromList"),
      to: "/settings/api-tokens/create"
    }, formatMessage({
      id: "Settings.apiTokens.create",
      defaultMessage: "Create new API Token"
    })) : void 0
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, !canRead && /* @__PURE__ */ react.createElement(build.NoPermissions, null), shouldDisplayDynamicTable && /* @__PURE__ */ react.createElement(build.DynamicTable, {
    headers,
    contentType: "api-tokens",
    rows: apiTokens,
    withBulkActions: canDelete || canUpdate,
    isLoading,
    onConfirmDelete: (id) => deleteMutation.mutateAsync(id)
  }, /* @__PURE__ */ react.createElement(DynamicTable, {
    canDelete,
    canUpdate,
    rows: apiTokens,
    withBulkActions: canDelete || canUpdate
  })), shouldDisplayNoContentWithCreationButton && /* @__PURE__ */ react.createElement(build.NoContent, {
    content: {
      id: "Settings.apiTokens.addFirstToken",
      defaultMessage: "Add your first API Token"
    },
    action: /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, formatMessage({
      id: "Settings.apiTokens.addNewToken",
      defaultMessage: "Add new API Token"
    }))
  }), shouldDisplayNoContent && /* @__PURE__ */ react.createElement(build.NoContent, {
    content: {
      id: "Settings.apiTokens.emptyStateLayout",
      defaultMessage: "You don\u2019t have any content yet..."
    }
  })));
};
/* harmony default export */ const ListView = (ApiTokenListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ProtectedListView/index.js




const ProtectedApiTokenListView = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
  permissions: permissions/* default.settings.api-tokens.main */.Z.settings["api-tokens"].main
}, /* @__PURE__ */ react.createElement(ListView, null));
/* harmony default export */ const ProtectedListView = (ProtectedApiTokenListView);


/***/ })

}]);