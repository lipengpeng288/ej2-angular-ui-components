import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['addInfo', 'constraints', 'height', 'horizontalAlignment', 'id', 'margin', 'offset', 'pathData', 'shape', 'style', 'verticalAlignment', 'visibility', 'width'];
let outputs: string[] = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * ```
 */
@Directive({
    selector: 'e-node>e-node-ports>e-node-port',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class PortDirective extends ComplexBase<PortDirective> {


    /** 
     * Allows the user to save custom information/data about a port



     */
    public addInfo: any;
    /** 
     * Defines the constraints of port



     */
    public constraints: any;
    /** 
     * Sets the height of the port

     */
    public height: any;
    /** 
     * Sets the horizontal alignment of the port with respect to its immediate parent(node/connector) 
     * * Stretch - Stretches the diagram element throughout its immediate parent 
     * * Left - Aligns the diagram element at the left of its immediate parent 
     * * Right - Aligns the diagram element at the right of its immediate parent 
     * * Center - Aligns the diagram element at the center of its immediate parent 
     * * Auto - Aligns the diagram element based on the characteristics of its immediate parent

     */
    public horizontalAlignment: any;
    /** 
     * Defines the unique id of the port

     */
    public id: any;
    /** 
     * Defines the space that the port has to be moved from its actual position

     */
    public margin: any;
    /** 
     * Defines the position of the port with respect to the boundaries of nodes/connector

     */
    public offset: any;
    /** 
     * Defines the geometry of the port

     */
    public pathData: any;
    /** 
     * Defines the type of the port shape 
     * * X - Sets the decorator shape as X 
     * * Circle - Sets the decorator shape as Circle 
     * * Square - Sets the decorator shape as Square 
     * * Custom - Sets the decorator shape as Custom

     */
    public shape: any;
    /** 
     * Defines the appearance of the port 
     * 

     */
    public style: any;
    /** 
     * Sets the vertical alignment of the port with respect to its immediate parent(node/connector) 
     * * Stretch - Stretches the diagram element throughout its immediate parent 
     * * Top - Aligns the diagram element at the top of its immediate parent 
     * * Bottom - Aligns the diagram element at the bottom of its immediate parent 
     * * Center - Aligns the diagram element at the center of its immediate parent 
     * * Auto - Aligns the diagram element based on the characteristics of its immediate parent

     */
    public verticalAlignment: any;
    /** 
     * Defines the type of the port visibility 
     * * Visible - Always shows the port 
     * * Hidden - Always hides the port 
     * * Hover - Shows the port when the mouse hovers over a node 
     * * Connect - Shows the port when a connection end point is dragged over a node



     */
    public visibility: any;
    /** 
     * Sets the width of the port

     */
    public width: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Port Array Directive
 * @private
 */
@Directive({
    selector: 'e-node>e-node-ports',
    queries: {
        children: new ContentChildren(PortDirective)
    },
})
export class PortsDirective extends ArrayBase<PortsDirective> {
    constructor() {
        super('ports');
    }
}