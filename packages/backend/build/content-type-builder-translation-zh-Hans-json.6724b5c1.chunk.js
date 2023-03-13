"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[46],{

/***/ 95078:
/***/ ((module) => {

module.exports = JSON.parse('{"attribute.boolean":"布尔类型","attribute.boolean.description":"Yes 或 no, 1 或 0, true 或 false","attribute.component":"组件","attribute.component.description":"您可以重复或重复使用的字段组","attribute.date":"日期选择器","attribute.date.description":"带有小时，分钟和秒的日期选择器","attribute.datetime":"日期时间选择器","attribute.dynamiczone":"动态区域","attribute.dynamiczone.description":"编辑内容时动态选择组件","attribute.email":"电子邮件","attribute.email.description":"带有格式验证的电子邮件字段","attribute.enumeration":"列举","attribute.enumeration.description":"值的列表，然后可以从中选择一个","attribute.json":"JSON","attribute.json.description":"JSON 格式的数据","attribute.media":"媒体文件","attribute.media.description":"图片，视频等文件","attribute.null":" ","attribute.number":"数字类型","attribute.number.description":"数字类型 (integer, float, decimal)","attribute.password":"密码输入框","attribute.password.description":"密码字段，会隐藏字符","attribute.relation":"引用","attribute.relation.description":"引用一个 Content Type","attribute.richtext":"富文本编辑器","attribute.richtext.description":"具有格式选项的富文本编辑器","attribute.text":"文本","attribute.text.description":"较短或较长的文字，例如标题或说明","attribute.time":"时间","attribute.uid":"UID","attribute.uid.description":"唯一标识符","button.attributes.add.another":"添加一个新字段","button.component.add":"添加组件","button.component.create":"创建新组件","button.model.create":"创建一个新的 Content Type","component.repeatable":"(可重复的)","components.componentSelect.no-component-available":"您已经添加了所有组件","components.componentSelect.no-component-available.with-search":"没有与您的搜索相匹配的组件","components.componentSelect.value-component":"{number} 个组件被选择 (输入以搜索组件)","components.componentSelect.value-components":"{number} 个组件被选择","configurations":"配置","contentType.collectionName.description":"当 Content Type 的名称和表名称不同时会很有用","contentType.collectionName.label":"集合名称","contentType.displayName.label":"显示名称","error.contentTypeName.reserved-name":"此名称不能在项目中使用，因为它可能会破坏其他功能","error.validation.minSupMax":"不能更高","form.attribute.component.option.add":"添加一个组件","form.attribute.component.option.create":"创建一个新的组件","form.attribute.component.option.create.description":"组件在类型和组件之间共享，它将随处可用。","form.attribute.component.option.repeatable":"可重复组件","form.attribute.component.option.repeatable.description":"最适合的成分，元标记等的多个实例（数组）。","form.attribute.component.option.reuse-existing":"使用一个已存在的组件","form.attribute.component.option.reuse-existing.description":"重用已经创建的组件，以使您的数据在内容类型之间保持一致。","form.attribute.component.option.single":"单一组件","form.attribute.component.option.single.description":"最适合的对完整地址，主要信息等字段进行分组...","form.attribute.item.customColumnName":"自定义列名称","form.attribute.item.customColumnName.description":"修改数据库列名，使得API返回更容易理解。","form.attribute.item.defineRelation.fieldName":"字段名称","form.attribute.item.enumeration.graphql":"GraphQL 的名称重写","form.attribute.item.enumeration.graphql.description":"允许您覆盖 GraphQL 的默认生成名称","form.attribute.item.enumeration.placeholder":"例如:\\nmorning\\nnoon\\nevening","form.attribute.item.enumeration.rules":"值（每个值占一行）","form.attribute.item.maximum":"最大值","form.attribute.item.maximumLength":"最大长度","form.attribute.item.minimum":"最小值","form.attribute.item.minimumLength":"最小长度","form.attribute.item.number.type":"数字格式","form.attribute.item.number.type.biginteger":"big integer (例如: 123456789)","form.attribute.item.number.type.decimal":"decimal (例如: 2.22)","form.attribute.item.number.type.float":"float (例如: 3.33333333)","form.attribute.item.number.type.integer":"integer (例如: 10)","form.attribute.item.privateField":"私有字段","form.attribute.item.privateField.description":"该字段不会显示在 API 请求的响应中","form.attribute.item.requiredField":"必须的","form.attribute.item.requiredField.description":"如果此字段为空，则无法创建字段。","form.attribute.item.uniqueField":"唯一的","form.attribute.item.uniqueField.description":"如果存在具有相同内容的现有条目，则无法创建条目。","form.attribute.media.option.multiple":"多种媒体","form.attribute.media.option.multiple.description":"最适合的滑块，转盘或多个文件下载","form.attribute.media.option.single":"单一的媒体","form.attribute.media.option.single.description":"最适合的头像，个人资料图片或封面","form.attribute.settings.default":"默认值","form.attribute.text.option.long-text":"较长的文字","form.attribute.text.option.long-text.description":"最适合的描述，传记。\\u2028精确搜索已禁用。","form.attribute.text.option.short-text":"较短的文字","form.attribute.text.option.short-text.description":"最适合的标题，名称，链接（URL）。它还可以在字段进行精确搜索。","form.button.add-components-to-dynamiczone":"将组件添加到区域","form.button.add-field":"添加另一个字段","form.button.add-first-field-to-created-component":"添加第一个字段到这个组件","form.button.add.field.to.component":"向该组件添加另一个字段","form.button.cancel":"取消","form.button.configure-component":"配置组件","form.button.configure-view":"配置视图","form.button.select-component":"选择一个组件","from":"来自","modalForm.attribute.form.base.name.description":"属性名称不允许使用空格","modalForm.attributes.select-component":"选择一个组件","modalForm.attributes.select-components":"选择组件","modalForm.component.header-create":"创建一个组件","modalForm.components.create-component.category.label":"选择一个类别或输入名称以创建一个新类别","modalForm.components.icon.label":"图标","modalForm.editCategory.base.name.description":"类别名称不允许有空格","modalForm.header-edit":"编辑 {name}","modalForm.header.categories":"类别","modalForm.sub-header.addComponentToDynamicZone":"将新组件添加到动态区域","modalForm.sub-header.attribute.create":"添加新的 {type} 字段","modalForm.sub-header.attribute.create.step":"添加新的组件 ({step}/2)","modalForm.sub-header.attribute.edit":"编辑 {name}","modalForm.sub-header.chooseAttribute.collectionType":"为您的 Content Type 选择一个字段","modalForm.sub-header.chooseAttribute.component":"为您的组件选择一个字段","modelPage.attribute.relationWith":"关联","notification.info.autoreaload-disable":"要使用此插件，需要自动重载功能。请使用 `strapi develop` 启动服务","notification.info.creating.notSaved":"在创建新的内容类型或组件之前，请保存您的工作","plugin.description.long":"给你的 API 的数据结构建模. 快速的创造新的字段(fields)和关系(relations)。将会自动在项目中创建和更新文件。","plugin.description.short":"给你的 API 的数据结构建模","popUpForm.navContainer.advanced":"高级设置","popUpForm.navContainer.base":"基础设置","popUpWarning.bodyMessage.cancel-modifications":"您确定要取消修改吗？","popUpWarning.bodyMessage.cancel-modifications.with-components":"您确定要取消修改吗？某些组件已创建或已修改了...","popUpWarning.bodyMessage.category.delete":"您确定要删除此类别吗？所有组件也将被删除。","popUpWarning.bodyMessage.component.delete":"您确定要删除此组件吗？","popUpWarning.bodyMessage.contentType.delete":"您确定要删除此 Content Type 吗?","prompt.unsaved":"您确定要离开吗？您所有的修改都将丢失。","relation.attributeName.placeholder":"例如: author, category, tag","relation.manyToMany":"有并属于许多","relation.manyToOne":"有很多","relation.manyWay":"有很多","relation.oneToMany":"属于很多","relation.oneToOne":"有一个","relation.oneWay":"有一个"}');

/***/ })

}]);