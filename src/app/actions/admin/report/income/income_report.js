export const LIST_BOOT_PRODUCT_INCOME_TOTAL = "LIST_BOOT_PRODUCT_INCOME_TOTAL";
export const LIST_BOOT_PRODUCT_INCOME_TOTAL_SUCCESS = "LIST_BOOT_PRODUCT_INCOME_TOTAL_SUCCESS";
export const LIST_BOOT_PRODUCT_INCOME_TOTAL_FAIL = "LIST_BOOT_PRODUCT_INCOME_TOTAL_FAIL";

export const LIST_BOOT_PRODUCT_INCOME_DETAIL = "LIST_BOOT_PRODUCT_INCOME_DETAIL";
export const LIST_BOOT_PRODUCT_INCOME_DETAIL_SUCCESS = "LIST_BOOT_PRODUCT_INCOME_DETAIL_SUCCESS";
export const LIST_BOOT_PRODUCT_INCOME_DETAIL_FAIL = "LIST_BOOT_PRODUCT_INCOME_DETAIL_FAIL";

export const LIST_MEMBER_PROMOTE_INCOME_DETAIL = "LIST_MEMBER_PROMOTE_INCOME_DETAIL";
export const LIST_MEMBER_PROMOTE_INCOME_DETAIL_SUCCESS = "LIST_MEMBER_PROMOTE_INCOME_DETAIL_SUCCESS";
export const LIST_MEMBER_PROMOTE_INCOME_DETAIL_FAIL = "LIST_MEMBER_PROMOTE_INCOME_DETAIL_FAIL";

export const LIST_MEMBER_PROMOTE_INCOME_TOTAL = "LIST_MEMBER_PROMOTE_INCOME_TOTAL";
export const LIST_MEMBER_PROMOTE_INCOME_TOTAL_SUCCESS = "LIST_MEMBER_PROMOTE_INCOME_TOTAL_SUCCESS";
export const LIST_MEMBER_PROMOTE_INCOME_TOTAL_FAIL = "LIST_MEMBER_PROMOTE_INCOME_TOTAL_FAIL";

export const LIST_ADVERTISER_INCOME_DETAIL = "LIST_ADVERTISER_INCOME_DETAIL";
export const LIST_ADVERTISER_INCOME_DETAIL_SUCCESS = "LIST_ADVERTISER_INCOME_DETAIL_SUCCESS";
export const LIST_ADVERTISER_INCOME_DETAIL_FAIL = "LIST_ADVERTISER_INCOME_DETAIL_FAIL";

export const LIST_ADVERTISER_INCOME_GRAND = "LIST_ADVERTISER_INCOME_GRAND";
export const LIST_ADVERTISER_INCOME_GRAND_SUCCESS = "LIST_ADVERTISER_INCOME_GRAND_SUCCESS";
export const LIST_ADVERTISER_INCOME_GRAND_FAIL = "LIST_ADVERTISER_INCOME_GRAND_FAIL";

export const LIST_CATEGORY_INCOME = "LIST_CATEGORY_INCOME";
export const LIST_CATEGORY_INCOME_SUCCESS = "LIST_CATEGORY_INCOME_SUCCESS";
export const LIST_CATEGORY_INCOME_FAIL = "LIST_CATEGORY_INCOME_FAIL";

/* LIST BOOTED PRODUCT INCOME */
export function actionListBootProductIncomeGrand(bootIncome) {
    return{
        type: LIST_BOOT_PRODUCT_INCOME_TOTAL,
        bootIncome: bootIncome
    }
}

/* LIST MEMBER BOOTED PRODUCT INCOME DETAIL */
export function actionListBootProductIncomeDetail(bootIncome) {
    return{
        type: LIST_BOOT_PRODUCT_INCOME_DETAIL,
        bootIncome: bootIncome
    }
}

/* ADMIN LIST MEMBER PROMOTE INCOME */
export function actionListMemberPromoteIncomeDetail(promote) {
    return{
        type: LIST_MEMBER_PROMOTE_INCOME_DETAIL,
        promote: promote
    }
}

/* ADMIN LIST GRAND TOTAL MEMBER PROMOTE INCOME */
export function actionListMemberPromoteIncomeGrand(promote) {
    return{
        type: LIST_MEMBER_PROMOTE_INCOME_TOTAL,
        promote: promote
    }
}

/* ADMIN LIST DETAIL ADVERTISER INCOME */
export function actionListAdvertiserIncomeDetail(advertiser) {
    return{
        type: LIST_ADVERTISER_INCOME_DETAIL,
        advertiser: advertiser
    }
}

/* ADMIN LIST GRAND ADVERTISER INCOME */
export function actionListAdvertiserIncomeGrand(advertiser) {
    return{
        type: LIST_ADVERTISER_INCOME_GRAND,
        advertiser: advertiser
    }
}

/* ADMIN LIST CATEGORY INCOME */
export function actionListCategoryIncome(income) {
    return{
        type: LIST_CATEGORY_INCOME,
        income: income
    }
}