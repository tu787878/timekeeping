class QuerySearch {
  final int limit;
  final String orderBy;
  final String orderType;
  final String search;

  QuerySearch({
    required this.limit,
    required this.orderBy,
    required this.orderType,
    required this.search,
  });

  toQuery() {
    return "?limit=" +
        this.limit.toString() +
        "&orderBy=" +
        this.orderBy +
        "&orderType=" +
        this.orderType +
        "&search=" +
        this.search;
  }
}

QuerySearch queryNewJobsBasic = new QuerySearch(
    limit: 10, orderBy: "created_time", orderType: "DESC", search: "");
