package com.luo.frontdesk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.luo.core"})
@ComponentScan(basePackages = {"com.luo.core","com.luo.frontdesk"})
@EnableJpaRepositories(basePackages = {"com.luo.core"})
@SpringBootApplication
public class FrontDeskApplication {

    public static void main(String[] args) {
        SpringApplication.run(FrontDeskApplication.class, args);
    }

}

