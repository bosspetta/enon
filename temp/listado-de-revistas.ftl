<#assign layoutLocalService = serviceLocator.findService("com.liferay.portal.kernel.service.LayoutLocalService") />
<style>
form#fm {
    display: none;
}
</style>
<div class="magazines" style="display: none;">
<div class="c-mb-4 c-mt-4 search-total-label magazines__info">
<#if searchContainer.getTotal() == 1>
            ${languageUtil.format(locale, "x-result-for-x", [searchContainer.getTotal(), "<strong>" + htmlUtil.escape(searchResultsPortletDisplayContext.getKeywords()) + "</strong>"], false)}
<#else>
            ${languageUtil.format(locale, "x-results-for-x", [searchContainer.getTotal(), "<strong>" + htmlUtil.escape(searchResultsPortletDisplayContext.getKeywords()) + "</strong>"], false)}
</#if>
</div>
 
    <div class="magazines__inner">
<ul class="magazines__items">
<#if entries?has_content>
<#list entries as entry>
 
                    <#assign layoutEntry = layoutLocalService.getLayout(entry.getClassPK()) />
 
                    <li class="magazines__item">
 
                        <div class="magazines__item__image-wrapper">
<@liferay_theme["layout-icon"] layout=layoutEntry />
</div>
<div class="magazines__item__title__wrapper">
<h4 class="magazines__item__title">
<a href="${entry.getViewURL()}" class="magazines__item__detail-link">${entry.getHighlightedTitle()}</a>
</h4>
</div>
<div class="magazines__item__data">
<div class="magazines__item__data__row">
<span class="magazines__item__data__label">Números publicados</span> <span class="magazines__item__data__value customNumerosPublicados"></span>
</div>
<#if layoutEntry.getExpandoBridge().getAttribute("Periodicidad")?has_content>
<div class="magazines__item__data__row">
<span class="magazines__item__data__label">Periodicidad</span>
<span class="magazines__item__data__value">${ layoutEntry.getExpandoBridge().getAttribute("Periodicidad") }</span>
</div>
</#if>
<#if layoutEntry.getExpandoBridge().getAttribute("CatalogoID")?has_content>
<span class="sr-only customExpandoCatalog">${ layoutEntry.getExpandoBridge().getAttribute("CatalogoID") }</span>
</#if>
</div>
 
                    </li>
 
                </#list>
</#if>
</ul>
</div>
</div>
