package com.luo.admin.libs;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RenderUtils {
    public static void renderJson(HttpServletResponse response, Object object) throws IOException {
        response.setContentType("application/json;charset=utf-8");

        response.getWriter().write(new ObjectMapper().writeValueAsString(object));
        response.getWriter().close();
    }
}
