package com.luo.core.entitys;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;

@Entity
@Data
@DynamicInsert
@DynamicUpdate
@JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
@Proxy(lazy = false)
@NamedNativeQueries({
        @NamedNativeQuery(
                name = "Permission.findByAdminUserId",
                query = "select p.* " +
                        "from admin_user u " +
                        "LEFT JOIN admin_role ar on u.id = ar.admin_user_id " +
                        "LEFT JOIN role r on ar.role_id = r.id " +
                        "LEFT JOIN role_permission rp on rp.role_id=r.id " +
                        "LEFT JOIN permission p on p.id =rp.permission_id " +
                        "where u.id= ?1",
                resultSetMapping = "userPermission"
        )
})

@SqlResultSetMappings({
        @SqlResultSetMapping(
                name = "userPermission",
                entities = @EntityResult(
                        entityClass = Permission.class
                )
        )
})

public class Permission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "int(11)")
    private long id;

    @Column(columnDefinition = "int(11) not null default 0 comment '父节点ID'")
    private long pid;

    @Column(columnDefinition = "varchar(50) not null default '' comment '权限标识'")
    private String identity;

    @Column(columnDefinition = "varchar(50) not null default '' comment '权限名称'")
    private String name;

    @Column(columnDefinition = "varchar(50) not null default '' comment '权限别名，配置时显示'")
    private String alias;

    @Column(columnDefinition = "varchar(255) not null default '' comment '描述'")
    private String description;

    @Column(columnDefinition = "varchar(255) not null default '' comment '路径'")
    private String path;
}
