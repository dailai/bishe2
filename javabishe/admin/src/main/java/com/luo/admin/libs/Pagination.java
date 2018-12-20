package com.luo.admin.libs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pagination {

    private int total;

    private int pageSize;

    private int current;

}
