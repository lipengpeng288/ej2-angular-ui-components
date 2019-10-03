import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Pager } from '@syncfusion/ej2-grids';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['currentPage','customText','enableExternalMessage','enablePagerMessage','enablePersistence','enableQueryString','enableRtl','externalMessage','locale','pageCount','pageSize','pageSizes','template','totalRecordsCount'];
export const outputs: string[] = ['click','created','dropDownChanged'];
export const twoWays: string[] = [];

/**
 * `ejs-pager` represents the Angular Pager Component.
 * ```html
 * <ejs-pager></ejs-pager>
 * ```
 */
@Component({
    selector: 'ejs-pager',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class PagerComponent extends Pager implements IComponentBase {



    /** 
     *  Defines the template as string or HTML element ID which renders customized elements in pager instead of default elements.

     */
    @ContentChild('template')
    @Template()
    public template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

