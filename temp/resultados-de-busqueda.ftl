<#assign commerceContext = renderRequest.getAttribute("COMMERCE_CONTEXT") />
<#assign isSigned=themeDisplay.isSignedIn() />

<#if commerceContext??>
    <#assign
        account = commerceContext.getAccountEntry()
        accountId = account.getAccountEntryId()
        chanelId = commerceContext.getCommerceChannelId()
    />
    <#if commerceContext.getCommerceOrder()??>
        <#assign orderItems = commerceContext.getCommerceOrder().getCommerceOrderItems() />
    </#if>
</#if>

<div class="items-grid">
    <#if entries?has_content>
        <#list entries as curCPCatalogEntry>
            <#assign
                cpDefinitionId = curCPCatalogEntry.getCPDefinitionId()
                productId = curCPCatalogEntry.getCProductId()
                productName = curCPCatalogEntry.getName()
                productShortDescription = curCPCatalogEntry.getShortDescription()
                productDescription = curCPCatalogEntry.getDescription()
                friendlyURL = cpContentHelper.getFriendlyURL(curCPCatalogEntry, themeDisplay)
                defaultImageURL = cpContentHelper.getDefaultImageFileURL(accountId, cpDefinitionId)
                defaultImageFileVersion = cpContentHelper.getCPDefinitionImageFileVersion(cpDefinitionId, request)
                productDetail = restClient.get("/headless-commerce-delivery-catalog/v1.0/channels/${chanelId}/products/${productId}?accountId=${accountId}&nestedFields=categories,productSpecifications")
                categories = productDetail.categories
                specifications = productDetail.productSpecifications
                tags = productDetail.tags
                featuredSpecificationKeys = ["fit", "weight", "material"]
                isSuggested = false
                suggestedClass = ""
            />

            <#if cpContentHelper.getDefaultCPSku(curCPCatalogEntry)?has_content>
                <#assign sku = cpContentHelper.getDefaultCPSku(curCPCatalogEntry).getSku()/>
            <#else>
                <#assign sku = "" />
            </#if>

            <#if tags?seq_contains("suggested")>
                <#assign isSuggested = true />
                <#assign suggestedClass = "suggested" />
            </#if>

            <div class="items-grid__item items-grid__item--${productDetail.productType}">
                <div class="items-grid__item__image">
                    <img src="${defaultImageURL}" alt="${productName}" class="items-grid__item__img" />
                </div>
                <div class="items-grid__item__data">
                    <h3 class="items-grid__item__title">
                        <a href="${friendlyURL}" title="Enlace al detalle">${productName}</a>
                    </h3>
                    <#if isSigned>
                        <div class="items-grid__item__favorite-wrapper">
                            <@liferay_commerce_ui["add-to-wish-list"]
                                CPCatalogEntry=curCPCatalogEntry
                                large=false
                            />
                        </div>
                    </#if>
                </div>
            </div>
        </#list>
    </#if>
</div>
