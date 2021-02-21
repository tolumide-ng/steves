import * as React from "react";
import "./index.css";
import promo from "../../../../assets/images/promo.jpeg";
import { useHistory } from "react-router";

interface entryDef {
    isIntersecting: boolean;
    intersectionRatio: number;
    target: {
        id: string;
    };
}

export const ProductTab = () => {
    const tabSection = React.useRef<HTMLElement>(null);
    const tabNav = React.useRef(null);
    const tabIndicator = React.useRef<HTMLDivElement>(null);
    const productLocation = React.useRef<HTMLDivElement>(null);

    const firstTab = React.useRef<HTMLElement>(null);
    const secondTab = React.useRef<HTMLElement>(null);
    const thirdTab = React.useRef<HTMLElement>(null);
    const fourthTab = React.useRef<HTMLElement>(null);
    const motherTab = React.useRef<HTMLDivElement>(null);

    const theTabs = [
        {
            label: "Product Details",
            id: "product",
        },
        {
            label: " Ring information",
            id: "ring",
        },
        {
            label: "finance information",
            id: "finance",
        },
        {
            label: "shipping & returns",
            id: "shipping",
        },
    ];

    const handleNav = (index: number) => {
        if (tabSection.current && firstTab.current) {
            tabSection.current.scrollLeft =
                firstTab.current?.offsetWidth * index;
        }
    };

    const history = useHistory();

 

    React.useEffect(() => {
        const theHash = history.location.hash.split("#")[1];
        const theIndex = theTabs.map((tab) => tab.id).indexOf(theHash);

        if (productLocation.current) {
            if (theIndex === -1) {
                productLocation.current.style.marginLeft = "0px";
            } else {
                const tabWidth = productLocation?.current?.clientWidth;
                productLocation.current.style.marginLeft = `${
                    theIndex * tabWidth
                }px`;
            }
        }
    }, [history.location.hash]);


    return (
        <>
            <section className="product-parent">
                <div className="product snap-tabs" ref={motherTab}>
                    <header className="scroll-snap-x product-header">
                        <nav ref={tabNav} className="product-nav">
                            {theTabs.map((tab, index) => (
                                <a
                                    href={`#${tab.id}`}
                                    id={tab.id}
                                    key={index}
                                    onClick={() => handleNav(index)}
                                    className={
                                        history.location.hash
                                            .split("#")[1]
                                            ?.toUpperCase() ===
                                        tab.id?.toUpperCase()
                                            ? "product-nav-active"
                                            : "product-nav-normal"
                                    }
                                >
                                    {tab.label}
                                </a>
                            ))}
                        </nav>
                    </header>
                    <div className="product-indicator" ref={tabIndicator}></div>
                    <div
                        className="product-location"
                        ref={productLocation}
                    ></div>

                    <section
                        className="product-cont scroll-snap-x "
                        ref={tabSection}
                    >
                        <article id="product" className="" ref={firstTab}>
                            <p>
                                A four claw solitaire style engagement ring. The
                                ring is set in 18ct rose gold and features a
                                round brilliant diamond. This setting is
                                suitable for a round brilliant diamond between
                                0.18ct and 2.00ct. If you were to require this
                                design to feature a larger diamond, then please
                                do contact us. Reference: PRS0004
                            </p>
                        </article>
                        <article id="ring" ref={secondTab}>
                            <p>
                                At Steven Stone presentation is very important,
                                so we ensure ever last detail is perfect when
                                you purchase diamonds or jewellery from us. All
                                of our jewellery is presented in high quality
                                boxes made from recycled materials.
                            </p>
                        </article>
                        <article id="finance" ref={thirdTab}>
                            <p>
                                At Steven Stone we give you the option of
                                spreading the cost of your jewellery over 12, 24
                                or 36 months making those larger purchase much
                                more affordable. As with every product at Steven
                                Stone, we believe in tailoring your experience
                                to meet your every need.
                            </p>
                        </article>
                        <article id="shipping" ref={fourthTab}>
                            <p>
                                Our shipping is fast & free. We use our fully
                                tracked and insured courier service to ensure
                                your item is safe. If you are not happy with
                                your ring then it can be returned within 30
                                days. Simply contact one of our customer service
                                team to organise a return or exchange.
                            </p>
                        </article>
                    </section>
                </div>
                <div className="product-promo">
                    <img src={promo} alt="" className="product-promo--img" />
                    <div className="product-promo-cont">
                        <p className="product-promo--text">
                            Purchase an engagement <br /> ring and recieve{" "}
                            <strong>10% off</strong>
                            <br />
                            your order*
                        </p>
                        <p className="product-promo--footer">
                            *Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum euis mod tellus justo.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
